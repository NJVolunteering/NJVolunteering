const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
  ssl: false, // Set SSL to false
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Query result:', res.rows[0]);
  }
  pool.end(); // Remember to end the pool when finished
});
