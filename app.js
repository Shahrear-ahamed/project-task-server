const express = require("express");
const app = express();
const cors = require("cors");

// routes are import here
const userDetailsRouter = require("./routers/userDetails.router");

// middle ware are here
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.use("/api/v1/userDetails", userDetailsRouter);

// exports the app
module.exports = app;
