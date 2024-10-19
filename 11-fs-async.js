const { readFile, writeFile } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.error(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `${first}\n${second}`,
      "utf-8",
      (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("�� File combined successfully!");
      }
    );
  });
});
console.log("starting next task");
