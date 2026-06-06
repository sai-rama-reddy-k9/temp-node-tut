//Modules

// const names = require("./4-names");
//or
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");

// sayHi("Susan");
// sayHi(names.john);
// sayHi(names.peter);
// or
// sayHi(john);
// sayHi(peter);

// Alternative forms of exports related

const data = require("./6-alternative_forms");
console.log(data.items[0]);
console.log(data.items[1]);
console.log(data.singlePerson);
