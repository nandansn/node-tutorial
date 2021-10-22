const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("about...");
  } else if (req.url === "/") {
    res.end("welcome...");
  } else {
    res.end(`<h2>404 - sorry resource not vailable</h2>`);
  }
});

server.listen(5000);
