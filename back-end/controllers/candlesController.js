const express = require("express");
const candles = express.Router();
const { getAllCandles } = require("../queries/candles");

candles.get("/", async (req, res) => {
  const candles = await getAllCandles();
  res.status(200).json(candles);
});

module.exports = candles;
