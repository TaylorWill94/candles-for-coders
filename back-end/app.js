// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

const candlesController = require("./controllers/candlesController");
app.use("/candles", candlesController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// EXPORT
module.exports = app;
