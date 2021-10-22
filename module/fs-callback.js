const path = require("path");
const { readFile, writeFile } = require("fs");

const readFilePath = path.resolve(
  __dirname,
  "../",
  "js-nuggets",
  "data",
  "test-data.txt"
);

const writeFilePath = path.resolve(
  __dirname,
  "../",
  "js-nuggets",
  "data",
  "res-callback.txt"
);

readFile(readFilePath, "utf-8", (err, res) => {
  setTimeout(() => {
    console.log("wait over");
  }, 2000);
  if (err) {
    console.error(err);
    return;
  }
  console.log("read file completed");
  writeFile(writeFilePath, res, { flag: "a" }, () => {
    console.log("write file completed");
  });
});

console.log(
  "serving next task, control will come here as there is a async calls.."
);

// async approach using call back
// this creates callback hell.
