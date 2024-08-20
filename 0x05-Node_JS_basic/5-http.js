const http = require('http');

const port = 1245;

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.end('This is the list of our students');
  }
});

app.listen(port);
module.exports = app;
