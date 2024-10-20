const http = require("http");
const path = require("fs");

http
  .createServer((req, res) => {
    const text = fs.readFileSync("./content/big.txt", "utf8");
    res.end(text);
  })
  .listen(3000);
