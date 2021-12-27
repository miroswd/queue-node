require("dotenv").config({});
const express = require("express");
const BullBoard = require("bull-board");
const UserController = require("./app/controllers/UserController");

const app = express();
app.use(express.json());
app.post("/users", UserController.store);

app.listen(3333, () => {
  console.log("Server is running on 3333");
});
