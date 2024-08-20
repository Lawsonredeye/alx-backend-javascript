const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.send('This is the list of our students');
});

const port = 1245;
app.listen(port);

module.exports = app;
