const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const readFilePath = path.resolve(
  __dirname,
  "../",
  "js-nuggets",
  "data",
  "test-data.txt"
);
console.log(readFilePath);

const first = readFileSync(readFilePath, "utf-8");

console.log(first);

const writeFilePath = path.resolve(
  __dirname,
  "../",
  "js-nuggets",
  "data",
  "result.txt"
);

console.log(writeFilePath);

writeFileSync(writeFilePath, `here is the result:${first}`);

// to append
writeFileSync(writeFilePath, `here is the result:${first}`, { flag: "a" });
