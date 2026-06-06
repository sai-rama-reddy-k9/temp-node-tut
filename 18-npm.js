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
