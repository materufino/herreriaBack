const mysql = require('mysql2');
const pool = mysql.createPool(process.env.SQL_URI);
global.db = pool.promise()