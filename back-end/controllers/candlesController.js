const express = require("express");
const { getAllCandles } = require("../queries/candles");
const candles = express.Router();

candles.get("/", async (req, res) => {
  const candle = await getAllCandles();
  res.status(200).json(candle);
});

module.exports = candles;
