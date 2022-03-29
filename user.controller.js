let query = require("./db.connection");
let getAllUsers = (req, res) => {
  query.execute("SELECT id , uName , uEmail FROM users", (err, data) => {
    if (data) res.status(200).json({ message: "Success!!", data });
    else res.status(500).json({ message: "Failed!!", err });
  });
};
let getUserBlogs = (req, res) => {
  let targetId = req.params.id;
  query.execute(
    `SELECT id , title, content FROM blogs WHERE author = ${targetId}`,
    (err, data) => {
      if (data.length > 0) res.status(200).json({ message: "Success!!", data });
      else res.status(500).json({ message: "User Not Found!!", err });
    }
  );
};
let getUserId = (req, res) => {
  let targetId = req.params.id;
  query.execute(
    `SELECT id , uName , uEmail FROM users WHERE id = ${targetId}`,
    (err, data) => {
      if (data.length > 0) res.status(200).json({ message: "Success!!", data });
      else res.status(500).json({ message: "User Not Found!!", err });
    }
  );
};
let addNewUser = (req, res) => {
  let data = req.body;
  query.execute(
    `INSERT INTO users (uName , uEmail ,uPassword) VALUE ('${data.uName}' , '${data.uEmail}' , '${data.uPassword}')`,
    (err, data) => {
      if (data) res.status(200).json({ message: "Added!!" });
      else res.status(404).json({ message: "Can Not Add User!!", err });
    }
  );
};
let updateUser = (req, res) => {
  let requireId = req.params.id;
  let data = req.body;
  query.execute(
    `UPDATE users SET uName ='${data.uName}' ,uEmail ='${data.uEmail}',uPassword  ='[value-4]' WHERE id = '${requireId}'`,
    (err, data) => {
      if (data) res.status(200).json({ message: "Updated!!" });
      else res.status(404).json({ message: "Can Not Updated User!!", err });
    }
  );
};
let deleteUser = (req, res) => {
  let requireId = req.params.id;
  query.execute(`DELETE FROM users WHERE id = '${requireId}'`, (err, data) => {
    if (data) res.status(200).json({ message: "Deleted!!" });
    else res.status(404).json({ message: "Can Not Deleted User!!", err });
  });
};
module.exports = {
  getAllUsers,
  getUserId,
  addNewUser,
  updateUser,
  deleteUser,
  getUserBlogs,
};
