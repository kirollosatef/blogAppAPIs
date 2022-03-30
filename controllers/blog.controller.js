let Blog = require("../models/blog.model");
const { Op } = require("sequelize");

let getAllBlogs = async (req, res) => {
  let blogsData = await Blog.findAll({
    attributes: ["id", "title", "content"],
  });
  res.status(200).json({ message: "Success!!", allBlogs: blogsData });
};

let addNewBlog = async (req, res) => {
  let data = req.body;
  await Blog.create({
    title: data.title,
    content: data.content,
  });
  let blogsData = await Blog.findAll({
    attributes: ["id", "title", "content"],
  });
  res.status(200).json({ message: "Added!!", allBlogs: blogsData });
};

let updateBlog = async (req, res) => {
  let targetId = req.params.id;
  let data = req.body;
  await Blog.update(
    { title: data.title, content: data.content },
    { where: { id: targetId } }
  );
  let blogsData = await Blog.findAll({
    attributes: ["id", "title", "content"],
  });
  res.status(200).json({ message: "Updated!!", allBlogs: blogsData });
};

let deleteBlog = async (req, res) => {
  let targetId = req.body.blogId;
  await Blog.destroy({ where: { id: targetId } });
  res.redirect("/");
};

let getBlogId = async (req, res) => {
  let requireId = req.params.id;
  let blog = await Blog.findOne({
    where: { id: { [Op.like]: `%${requireId}%` } },
  });
  if (blog) {
    res.render("blog.ejs", { title: blog.title, blogIdContent: blog });
  } else {
    res.render("notFound.ejs");
  }
};

let searchTitle = async (req, res) => {
  let data = req.body;
  let blog = await Blog.findOne({
    where: { title: { [Op.like]: `%${data.blogTitle}%` } },
  });
  if (blog) {
    res.render("blog.ejs", { title: blog.title, blogIdContent: blog });
  } else {
    res.render("notFound.ejs");
  }
};

module.exports = {
  getAllBlogs,
  getBlogId,
  addNewBlog,
  updateBlog,
  deleteBlog,
  searchTitle,
};
