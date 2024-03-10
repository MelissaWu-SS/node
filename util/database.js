const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '2024Bonjour,.',
  database: 'node-complete'
});

module.exports = pool.promise();