const app = require("express").Router();
let blogController = require("../controllers/blog.controller.js");
app.get("/getAllBlogs", blogController.getAllBlogs);
app.post("/addNewBlog", blogController.addNewBlog);
app.put("/updateBlog/:id", blogController.updateBlog);
app.post("/deleteBlog", blogController.deleteBlog);
app.get("/blog/:id", blogController.getBlogId);
app.post("/searchTitle", blogController.searchTitle);
module.exports = app;