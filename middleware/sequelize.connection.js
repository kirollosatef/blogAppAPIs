let sequelize = require("sequelize");
let connection = new sequelize("blogAppDb", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = connection;