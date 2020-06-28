const express = require('express');
const { isStraight } = require('./src/straight');

const app = express();
const port = 3000;

app.get('/', function (_, res, next) {
  res.send({ result: isStraight([2, 7, 8, 5, 10, 9, 11]) });
})

const server = app.listen(port, () => {
  console.log(`running on http://localhost:${server.address().port}`);
});
