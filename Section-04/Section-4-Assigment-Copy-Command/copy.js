#!/usr/bin/env node
import { copyFile } from "node:fs/promises";
import path from "node:path";

// Get arguments from the command line
const [source, destination] = process.argv.slice(2);

// Validate inputs
if (!source || !destination) {
  console.error("Usage: copy <source-file> <destination-path>");
  process.exit(1);
}

try {
  // Resolve the destination path
  const destinationFile = path.join(destination, path.basename(source));

  // Copy the file
  await copyFile(source, destinationFile);

  console.log(`File copied successfully to ${destinationFile}`);
} catch (err) {
  console.error(`Error copying file: ${err.message}`);
  process.exit(1);
}
