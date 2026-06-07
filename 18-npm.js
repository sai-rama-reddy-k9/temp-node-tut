// npm - Global command, comes with Node
// npm --version

//Local dependencies - use it only in this particular project
// npm i <packageName>

//Global dependencies -use it in any project
//npm install -g <packageName>
//sudo npm install -g <packageName> (mac)

//package.json - manifest file (stores important information about project/package)
// manual approach = (create package.json in the root, create properties, etc)
//npm init (step by step , press enter to skip)
//npm init -y (everything default)

//npm uninstall <packageName>

const lo = require("lodash");

const items = [1, [2, [3, [4]]]];

const new_items = lo.flattenDeep(items);

console.log(new_items)

//When someone clone this repo they do not have node_modules folder since we put it in .gitignore
//If they have package.json

//npm install     will download all dependencies in package.json


// Dev dependencies -- packages you only need for local coding, testing phase of the project they are completely excluded
// from final production ready version of your application.

// npm i <packageName> -D  (or)
// npm i <packageName> --save-dev