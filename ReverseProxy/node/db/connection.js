const mysql = require("mysql2");

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "db",
  port: 3306,
};

const connection = mysql.createConnection(config);

connection.query(
  "CREATE TABLE IF NOT EXISTS people ( id INTEGER PRIMARY KEY AUTO_INCREMENT, name TEXT)"
);

module.exports = connection;
