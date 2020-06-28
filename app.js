const express = require('express');

const app = express();
const port = 3000;

app.get('/', function (_, res, next) {
  res.send({ result: true });
})

const server = app.listen(port, () => {
  console.log(`running on http://localhost:${server.address().port}`);
});
