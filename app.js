let express = require("express");
const app = express();
let port = 3000 || process.env.PORT;
let path = require("path");
let createTables = require("./middleware/createTables.js");

app.use(express.json()); //for json file

// let userRoutes = require("./routes/user.routes.js"); 
let blogsRoutes = require("./routes/blog.routes.js");
// app.use(userRoutes);
app.use(blogsRoutes);

createTables();

app.listen(port, console.log(`Server is up and running on port ${port}`));