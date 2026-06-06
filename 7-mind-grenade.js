const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`the sum is : ${num1 + num2}`);
}

addValues();

//In another module

//When you import or require a module in Node.js, the runtime automatically executes all 
// the top-level JavaScript code inside that file immediately to initialize the module. 
// Writing an export statement is only necessary if you want to pass specific variables,
//  functions, or objects out to the importing file.

// const res = require("./7-mind-grenade");
// console.log(res)

// the sum is : 15
// {}
