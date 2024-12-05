#!/usr/bin/env node
import { readFile } from "node:fs/promises";

const filePath = process.argv[2];
const WordToFind = process.argv[3];

const fileContent = await readFile(filePath, "utf-8");

const wordsArray = fileContent.split(/[\W]/).filter((w) => w);

const wordsCount = {};
wordsArray.forEach((word) => {
  const lowerCaseWord = word.toLowerCase();
  if (lowerCaseWord in wordsCount) {
    wordsCount[lowerCaseWord] += 1;
  } else {
    wordsCount[lowerCaseWord] = 1;
  }
});

if (WordToFind) {
  const wordcount = wordsCount[WordToFind.toLowerCase()] || 0;
  console.log(
    `The word "${WordToFind}" appear "${wordcount}"  times in the file.`
  );
} else console.log(wordsCount);

// console.log(filePath);
