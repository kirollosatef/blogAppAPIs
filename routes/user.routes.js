const app = require("express").Router();
let userController = require("./user.controller");
app.get("/getAllUsers", userController.getAllUsers);
app.get("/getAllUsers/:id", userController.getUserId);
app.get("/getUserBlogs/:id", userController.getUserBlogs);
app.post("/addNewUser", userController.addNewUser);
app.put("/updateUser/:id", userController.updateUser);
app.delete("/deleteUser/:id", userController.deleteUser);
module.exports = app;
