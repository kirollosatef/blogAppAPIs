let sequelize = require("./sequelize.connection");
let createTables = () => {
  sequelize
    .sync()
    .then(() => {
      console.log("connected using to sequlize to database server!!");
    })
    .catch((err) => console.log(err));
};
module.exports = createTables;
