const express = require("express");
const app = express();

//dotenv file
require("dotenv").config();
const PORT = process.env.PORT || 5000;

//Cors import for access to frontend
const cors = require("cors");
app.use(cors());

//importing file of database connection
require("./config");
//importing usermodel
const User = require("./userModel");

app.use(express.json());

// EndPoint for signup method
app.post("/users", async (req, res) => {
  let data = new User(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
});

//Endpoint for login method
app.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send({ result: "no user found" });
    }
  }
});

// Port details
app.listen(PORT, () => {
  console.log(`listening at port ${PORT} `);
});
