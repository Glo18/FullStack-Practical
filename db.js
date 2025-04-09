const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '', // replace with your password if any
  database: 'user_data',
});

module.exports = db;
