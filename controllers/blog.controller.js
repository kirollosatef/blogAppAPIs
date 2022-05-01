let Blog = require("../models/blog.model");
const { Op } = require("sequelize");

let getAllBlogs = async (req, res) => {
  let blogsData = await Blog.findAll({
    attributes: ["id", "title", "content"],
  });
  res.render("allBlogs.ejs", { allBlogs: blogsData });
};

let addNewBlog = async (req, res) => {
  let data = req.body;
  await Blog.create({
    title: data.title,
    content: data.content,
  });
  res.redirect("/getAllBlogs");
};

let deleteBlog = async (req, res) => {
  let targetId = req.body.blogId;
  await Blog.destroy({ where: { id: targetId } });
  res.redirect("/getAllBlogs");
};

let updateBlog = async (req, res) => {
  let targetId = req.body.blogId;
  let data = req.body;
  await Blog.update(
    { title: data.title, content: data.content },
    { where: { id: targetId } }
  );
  res.redirect("/getAllBlogs");
};

let searchTitle = async (req, res) => {
  let blogTitle = req.body.titleToSearch;
  let blogsData = await Blog.findAll({
    where: { title: { [Op.like]: `%${blogTitle}%` } },
  });
  if (blogsData.length > 1 && blogTitle == " ") {
    res.render("searchBlog.ejs", { allBlogs: blogsData });
  } else {
    res.render("notFound.ejs");
  }
};

let getBlogId = async (req, res) => {
  let requireId = req.b.id;
  let all = await Blog.findAll({
    where: { id: { [Op.substring]: `%${requireId}%` } },
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
