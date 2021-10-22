const data = require("./data/menu");

console.log(data.menu);

let getCategory = (m) => m.category;
let categories = [...new Set(data.menu.map(getCategory))];
console.log(categories);

// to get the unique values
// use map to get all the category
// use the set to get unique category
// use ... operator to convert the objets to array of values.
