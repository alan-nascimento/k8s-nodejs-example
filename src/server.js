require('dotenv/config');

const express = require('express');
const { Client } = require('pg');

const server = express();

server.use(express.json());

server.get('/', (req, res) => res.json({ hello: 'world' }));

const client = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
});

client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);

  client.end();
});

server.listen(PORT, () => console.log(`Listening on port ${process.env.PORT}`));
