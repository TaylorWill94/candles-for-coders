const db = require("../db/dbConfig.js");

const getAllCandles = async () => {
  console.log("Step 2");
  console.log(db);
  try {
    const allCandles = await db.any("SELECT * FROM candles");
    console.log(allCandles);
    return allCandles;
  } catch (err) {
    console.log("Hi");
    return err;
  }
};

const getOneCandle = async (id) => {
  try {
    const oneCandle = await db.one("SELECT * FROM candles WHERE id=$1", id);
    return oneCandle;
  } catch (err) {
    return err;
  }
};

const createCandle = async (newCandle) => {
  try {
    const createdCandle = await db.one(
      "INSERT INTO candles (name, description, price, rating, featured) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        newCandle.name,
        newCandle.description,
        newCandle.price,
        newCandle.rating,
        newCandle.featured,
      ]
    );
    return createdCandle;
  } catch (err) {
    return err;
  }
};

const deleteCandle = async (id) => {
  try {
    const deletedCandle = await db.one(
      "DELETE FROM candles WHERE id=$1 RETURNING *",
      id
    );
    return deletedCandle;
  } catch (err) {
    return err;
  }
};

const editCandle = async (id, candle) => {
  console.log(id, candle);
  try {
    const updatedCandle = await db.one(
      "UPDATE candles SET name=$1, description=$2, price=$3, rating=$4, featured=$5 WHERE id=$6 RETURNING *",
      [
        candle.name,
        candle.description,
        candle.price,
        candle.rating,
        candle.featured,
        id,
      ]
    );
    console.log(updatedCandle);
    return updatedCandle;
  } catch (err) {
    return err;
  }
};

// const editCandle = async (id, candle) => {
//   try {
//     const { name, description, price, rating, favorite } = candle;
//     const editedCandle = await db.one(
//       "UPDATE candles SET name=$2, description=$3, price=$4, rating=$5, favorite=$6 WHERE id=$1 RETURNING *",
//       [id, name, description, price, rating, favorite]
//     );
//     return editedCandle;
//   } catch (error) {
//     return error;
//   }
// };

module.exports = {
  getAllCandles,
  getOneCandle,
  createCandle,
  deleteCandle,
  editCandle,
};
