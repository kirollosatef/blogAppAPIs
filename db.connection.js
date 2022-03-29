const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "blogAppDB",
});
connection.connect((err) => {
  if (err) console.log("mysql error: " + err);
  else console.log("Connected To Database Successfuly!!");
});
module.exports = connection;
