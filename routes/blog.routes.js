const app = require("express").Router();
let blogController = require("../controllers/blog.controller.js");
app.get("/getAllBlogs", blogController.getAllBlogs);
app.post("/addNewBlog", blogController.addNewBlog);
app.post("/deleteBlog", blogController.deleteBlog);
app.post("/updateBlog", blogController.updateBlog);
app.post("/searchTitle", blogController.searchTitle);
app.get("/blog/:id", blogController.getBlogId);
module.exports = app;