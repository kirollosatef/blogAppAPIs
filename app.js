let express = require("express");
let bodyParser = require("body-parser");
const app = express();
let port = 3000 || process.env.PORT;
let path = require("path");
let staticFiles = path.join(__dirname, "./public");
let createTables = require("./middleware/createTables.js");

app.use(express.json()); //for json file
app.set("view engine", "ejs");
app.use(express.static(staticFiles));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// let userRoutes = require("./routes/user.routes.js");
let blogsRoutes = require("./routes/blog.routes.js");
// app.use(userRoutes);
app.use(blogsRoutes);

createTables();

app.listen(port, console.log(`Server is up and running on port ${port}`));
