const names = require("./names");
const hi = require("./utils");
require("./calc"); // module will get executed, means any function called within the module, then function will get executed.
const packageName = require("./names");

console.log(packageName);

for (const key in names) {
  hi(names[key]);
}
