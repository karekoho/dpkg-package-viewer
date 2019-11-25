const express = require('express');
const app = express();
const fs = require('fs')
const cors = require('cors');

app.use(cors());

// const path = './doc/status.real.txt';
const path = '/var/lib/dpkg/status';

app.get('/', (request, response) => {
  let data = '';
  const readStream = fs.createReadStream(path, { encoding: 'utf8' });

  readStream.on('data', (chunk) => {
    data += chunk;
  }).on('end', () => {
    response.set('Content-Type', 'text/plain; charset=utf-8');
    response.send(data);
  }).on('error', (err) => {
    response.set('Content-Type', 'application/json; charset=utf-8');
    response.status(404).end()
    console.error(err)
  })
});

const port = process.argv.length > 2 ? process.argv[2] : 8081;

const server = app.listen(port, () => {
   const port = server.address().port
   console.log("File server listening on http://localhost:%s", port)
})