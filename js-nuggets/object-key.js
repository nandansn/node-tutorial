let person = {};

let addProperty = (obj, name, value) => {
  obj[name] = value;
};

addProperty(person, "first-name", "nanda");
addProperty(person, "last-name", "kumar");

console.log(person);
