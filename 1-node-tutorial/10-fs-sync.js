const { readFileSync, writeFileSync } = require("fs");

console.log("��️Reading files...");
const first = readFileSync("./content/first.txt", "utf-8");
//console.log("✌️first --->", first);
const second = readFileSync("./content/second.txt", "utf-8");
//console.log("✌️second --->", second);

const third = writeFileSync(
  "./content/third.txt",
  `Here is the result: ${first} and ${second}`,
  { flag: "a" }
);

console.log("�� third file has been updated");
console.log("starting the next one");
