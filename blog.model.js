let connection = require("./sequelize.connection");
let sequelize = require("sequelize");

let user = connection.define("users", {
  uName: sequelize.STRING,
  uEmail: sequelize.STRING,
  uPhone: sequelize.STRING,
  uPassword: sequelize.STRING,
});

let blog = connection.define("blogs", {
  title: sequelize.STRING,
  content: sequelize.STRING,
  author: {
    type: sequelize.INTEGER,
    references: {
      model: "users",
      Key: "id",
    },
  },
});

module.exports = {
  blog,
  user,
};