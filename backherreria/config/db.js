const mysql = require('mysql2');
const pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "1977mateo",
    port: 3306,
    database: "guardianes"
}
);
global.db = pool.promise()