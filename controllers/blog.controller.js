let Blog = require("./blog.model").blog;
let User = require("./blog.model").user;
const { Op } = require("sequelize");

let getAllBlogs = async (req, res) => {
  let blogsData = await Blog.findAll({});
  let usersData = await User.findAll({});
  res.render("allBlogs.ejs", { allBlogs: blogsData, allUsers: usersData });
};

let addNewBlog = async (req, res) => {
  let user = await User.findOne({
    where: { uName: { [Op.like]: `%${req.body.userName}%` } },
  });
  console.log(user);
  await Blog.create({
    title: req.body.title,
    content: req.body.content,
    author: user.id,
  });
  res.redirect("/");
};

let updateBlog = async (req, res) => {
  let targetId = req.body.blogId;
  await Blog.update(
    { title: req.body.newTitle, content: req.body.newContent },
    { where: { id: targetId } }
  );
  res.redirect("/");
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
