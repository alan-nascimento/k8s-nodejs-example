const { Client } = require('pg');

module.exports = async (retries = 5) => {
  while (retries) {
    try {
      const client = new Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
      });

      await client.connect();

      client.query('SELECT NOW()', (err, res) => {
        console.log(err, res);

        client.end();
      });

      break;
    } catch (err) {
      retries -= 1;

      console.log(err);
      console.log(`Retries left: ${retries}`);

      await new Promise((res) => setTimeout(res, 5000));
    }
  }
};
