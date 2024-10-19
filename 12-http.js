const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to the home page");
  }
  if (req.url === "/about") {
    res.end("This is the about page");
  }
  res.end(`
        <h1>Oops!</h1>
        <P>We cant seem to find the page you are looking for</p>
        <a href="/">Go back to home</a>
    `);
});

server.listen(5000);
