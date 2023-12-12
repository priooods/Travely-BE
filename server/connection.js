const mysql = require("mysql");
const dotenv = require("dotenv").config();
// sesuaikan sama koneksi ke database 
const connection = mysql.createConnection({
  host: process.env.DB_LOCAL,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// konek ke mysql
module.exports = connection;