const express = require("express");
const {
  getAllCandles,
  getOneCandle,
  createCandle,
  deleteCandle,
  editCandle,
} = require("../queries/candles");
const candles = express.Router();

candles.get("/", async (req, res) => {
  const candle = await getAllCandles();
  res.status(200).json(candle);
});

candles.get("/:id", async (req, res) => {
  const oneCandle = await getOneCandle(req.params.id);
  res.status(200).json(oneCandle);
});

candles.post("/", async (req, res) => {
  const oneSingleCandle = await createCandle(req.body);
  res.status(201).json(oneSingleCandle);
});

candles.delete("/:id", async (req, res) => {
  try {
    const deletedCandle = await deleteCandle(req.params.id);
    res.status(200).json(deletedCandle);
  } catch (err) {
    res.status(500).json({ err: "No candle at this route" });
  }
});

// candles.put("/:id", async (request, response) => {
//   const { id } = request.params;
//   const candle = request.body;
//   try {
//     const updateCandle = await editCandle(id, candle);
//     response.status(200).json(updateCandle);
//   } catch (error) {
//     return error;
//   }
// });

// candles.put("/:id", async (req, res) => {
//   const { id } = req.params;
//   const candleBody = req.body;
//   const candle = await editCandle(id, candleBody);
//   if (candle) {
//     console.log("TeeHee");
//     res.status(200).json(candle);
//   } else {
//     res.status(404).json({ error: "you cannot update this candle." });
//   }
// });

candles.put("/:id", async (request, response) => {
  try {
    const updatedCandle = await editCandle(request.body, request.params.id);
    response.status(200).json(updatedCandle);
  } catch (error) {
    response.status(400).json({ err: "Sorry buddy" });
  }
});

module.exports = candles;
