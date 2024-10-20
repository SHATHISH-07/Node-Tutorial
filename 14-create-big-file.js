const { writeFileSync } = require("fs");

for (let i = 0; i < 100; i++) {
  writeFileSync(`./content/big.txt`, `This is line ${i}\n`, { flag: "a" });
}
const { createReadStream, createWriteStream } = require("fs");

const stream = createReadStream("./content/big.txt", { encoding: "utf8" });

stream.on("data", (result) => {
  console.log(result);
});

stream.on("end", () => {
  console.log("Finished reading the file");
});

stream.on("error", (err) => {
  console.log("Error reading the file", err);
});
