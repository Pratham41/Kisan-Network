const mysql = require("mysql");
require("dotenv").config();

exports.db = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER_NAME,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});
