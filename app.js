let express = require("express");
const app = express();
let port = 3000 || process.env.PORT;
let path = require("path");
let staticFile = path.join(__dirname, "./public");
let createTables = require("./createTabels");
//Parse form data coming from template-engine
let bodyParser = require("body-parser");

app.use(express.json()); //for json file

//template-engine
app.set("view-engine", "ejs");
app.use(express.static(staticFile));
app.use(bodyParser.urlencoded({ extended: false }) );

let userRoutes = require("./user.routes.js"); 
let blogsRoutes = require("./blog.routes.js");
app.use(userRoutes);
app.use(blogsRoutes);
createTables();

app.listen(port, console.log(`Server is up and running on port ${port}`));

// Simple HTTP server that accepts a user's name and responds with a greeting
