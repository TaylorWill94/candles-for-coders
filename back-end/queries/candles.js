const db = require("../db/dbConfig");

const getAllCandles = async () => {
  try {
    const candles = await db.any("SELECT * FROM candles");
    return candles;
  } catch (err) {
    return err;
  }
};

module.exports = { getAllCandles };
