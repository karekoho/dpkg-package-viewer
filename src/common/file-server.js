const express = require('express');
const app = express();
const fs = require('fs')
const cors = require('cors');

app.use(cors());

app.get('/', function (request, response) {
  response.send(fs.readFileSync('./doc/status.real.txt', 'utf-8'));
});

const port = process.argv.length > 2 ? process.argv[2] : 8081;

const server = app.listen(port, function () {
   const host = server.address().address
   const port = server.address().port
   console.log("File server listening on http://%s:%s", host, port)
})