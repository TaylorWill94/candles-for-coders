// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONFIGURATION
const app = express();
const candlesController = require("./controllers/candlesController");

// MIDDLEWARE
app.use(cors());
app.use(express.json()); // Parse incoming JSON

app.use("/candles", candlesController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// EXPORT
module.exports = app;
