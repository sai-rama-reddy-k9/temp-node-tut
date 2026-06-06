const { readFileSync, writeFileSync } = require("fs");

console.log("Starting the task");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// f = first.toString();
// s = second.toString();
// console.log(f, s);
console.log(first + second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result :: ${first + " , " + second}`,
  { flag: "a" },
);
console.log("Done with the task");
console.log("Start the next task");
