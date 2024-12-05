import fs from "node:fs/promises";

// // const content = fs.readFileSync("./index.html", "utf-8");
// fs.readFile("./index.html", (err, data) => {
//   const content = data.toString;
//   console.log(content);
// });
// console.log("End");

// //no need of below line if we use utf-8 in above
// // const content = contentBuffer.toString();
console.time();
let b = 0;
const timerId = setInterval(() => {
  console.log(b++);
  if (b === 15) {
    clearInterval(timerId);
    console.timeEnd();
  }
}, 5);
const a = await fs.readFile("./introduction to fs module.txt");
console.log("Reading Don");
console.log("End");
