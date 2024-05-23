require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

client.connect();

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL,
    interests TEXT NOT NULL
  );
`;

client.query(createTableQuery, (err, res) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Table is successfully created');
  }
  client.end();
});
