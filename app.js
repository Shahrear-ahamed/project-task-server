const express = require("express");
const app = express();
const cors = require("cors");

// middle ware are here
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

// exports the app
module.exports = app;
