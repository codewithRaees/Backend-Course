import fs from "fs/promises";

const contentBuffer = await fs.readFile("text.txt");

let binnaryString = "";
contentBuffer.forEach((element) => {
  binnaryString += element.toString(2) + " ";
});

console.dir(contentBuffer);
