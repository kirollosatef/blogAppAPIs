let connection = require("../middleware/sequelize.connection");
let sequelize = require("sequelize");

let blog = connection.define("blogs", {
  title: sequelize.STRING,
  content: sequelize.STRING,
});

let getAllBlogs

module.exports = blog;

// INSERT INTO `blogs`(`title`, `content`)
// VALUES('blog 1234', 'lorem ipsum dolor sit amet consectetur adipisicing elit.');
// INSERT INTO `blogs`(`title`, `content`)
// VALUES('blog 4532', 'lorem ipsum dolor sit amet consectetur adipisicing elit.');
// INSERT INTO `blogs`(`title`, `content`)
// VALUES('blog 4536', 'lorem ipsum dolor sit amet consectetur adipisicing elit.');
// INSERT INTO `blogs`(`title`, `content`)
// VALUES('blog 6134', 'lorem ipsum dolor sit amet consectetur adipisicing elit.');
// INSERT INTO `blogs`(`title`, `content`)
// VALUES('blog 5678', 'lorem ipsum dolor sit amet consectetur adipisicing elit.');
// INSERT INTO `blogs`(`title`, `content`)
// VALUES('blog 1233', 'lorem ipsum dolor sit amet consectetur adipisicing elit.');
