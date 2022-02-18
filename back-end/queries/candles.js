const db = require("../db/dbConfig.js");

const getAllCandles = async () => {
  try {
    const allCandles = await db.any("SELECT * FROM candles");
    return allCandles;
    console.log(allCandles);
  } catch (err) {
    console.log("Hi");
    return err;
  }
  // const allDogs = await db.any("SELECT * FROM dogs");
  // console.log(allDogs);
  // return allDogs;
};

module.exports = { getAllCandles };
