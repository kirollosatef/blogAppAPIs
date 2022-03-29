const app = require("express").Router();
let blogController = require("./blog.controller");
app.get("/", blogController.getAllBlogs);
app.get("/blog/:id", blogController.getBlogId);
app.post("/addNewBlog", blogController.addNewBlog);
app.post("/updateBlog", blogController.updateBlog);
app.post("/deleteBlog", blogController.deleteBlog);
app.post("/searchTitle", blogController.searchTitle);
module.exports = app;
// INSERT INTO `blogs`(`title`, `content`, `author`)
// VALUES('[value-1]', '[value-2]', 1);
// INSERT INTO `blogs`(`title`, `content`, `author`)
// VALUES('[value-1]', '[value-2]', 1);
// INSERT INTO `blogs`(`title`, `content`, `author`)
// VALUES('[value-1]', '[value-2]', 2);
// INSERT INTO `blogs`(`title`, `content`, `author`)
// VALUES('[value-1]', '[value-2]', 2);
// INSERT INTO `blogs`(`title`, `content`, `author`)
// VALUES('[value-1]', '[value-2]', 3);
// INSERT INTO `blogs`(`title`, `content`, `author`)
// VALUES('[value-1]', '[value-2]', 3);
// INSERT INTO `blogs`(`title`, `content`, `author`)
// VALUES('[value-1]', '[value-2]', 4);
// INSERT INTO `blogs`(`title`, `content`, `author`)
// VALUES('[value-1]', '[value-2]', 4);
// INSERT INTO `blogs`(`title`, `content`, `author`)
// VALUES('[value-1]', '[value-2]', 5);
// INSERT INTO `blogs`(`title`, `content`, `author`)
// VALUES('[value-1]', '[value-2]', 5);
// INSERT INTO `blogs`(`title`, `content`, `author`)
// VALUES('[value-1]', '[value-2]', 6);
// INSERT INTO `blogs`(`title`, `content`, `author`)
// VALUES('[value-1]', '[value-2]', 6);
