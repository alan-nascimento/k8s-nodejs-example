require('dotenv/config');

const express = require('express');
const { Client } = require('pg');

const PORT = 3000;

const server = express();

server.use(express.json());

server.get('/', (req, res) => res.json({ hello: 'world' }));

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'database',
  password: 'root',
  port: 5432,
});

client.connect();

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);

  client.end();
});

server.listen(PORT, () =>
  console.log(`Listening on port ${process.env.PORT || PORT}`)
);
