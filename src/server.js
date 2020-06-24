require('dotenv/config');

const express = require('express');
const connection = require('./database');

const server = express();

connection();

server.get('/', (req, res) => res.send('Hello World!'));

server.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
