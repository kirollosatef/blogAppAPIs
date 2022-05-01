const connection = require("../middleware/sequelize.connection");
const sequelize = require("sequelize");

let user = connection.define("users", {
  username: sequelize.STRING,
  email: sequelize.STRING,
  password: sequelize.STRING,
});

module.exports = user;