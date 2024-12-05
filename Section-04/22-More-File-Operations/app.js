import { unlink, rename, copyFile, rmdir, rm, stat } from "node:fs/promises";

// rename("./renameTesting.txt", "./sseTesting.txt")
// copyFile("destination.txt", "copyTesting.txt", (err) => {});

// unlink is used to delete a file
// unlink("destination.txt");
//to delete empty directory
// rmdir("testing");

//to delete directory having files
// rm("testing", { recursive: true });

const status = stat("app.js");
console.log(status);
