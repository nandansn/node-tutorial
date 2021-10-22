// local
const secretName = "Super Man";

const john = "john1";
const peter = "peter1";

module.exports = { john, peter }; // exporting objects

// alternate way to export

module.exports.items = ["it-1", "it-3", "it-2"];

const person = {
  name: "nanda",
  age: 41,
};

module.exports.person = person;
