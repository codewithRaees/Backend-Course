import { readFile, appendFile, writeFile } from "node:fs/promises";
import { CLIENT_RENEG_WINDOW } from "node:tls";

try {
  const contentBuffer = await readFile("./raiss.jpg");
  writeFile("C:\\Users\\Raees\\OneDrive\\Desktop\\abc.png", contentBuffer);
} catch (err) {
  appendFile(
    "error.log",
    `\n\n\n${new Date().toLocaleString()}\n${err.message}\n${err.stack}`
  );
  console.log(err);
  console.log("To see full error message go to error.log file");
}
