import axios from "axios";
import { useState, useEffect } from "react";
import Candle from "./Candle";

function Candles() {
  const API = process.env.REACT_APP_API_URL;
  const [candles, setCandles] = useState([]);

  useEffect(() => {
    axios.get(`${API}/candles`).then((response) => setCandles(response.data));
  }, [API]);

  return (
    <div className="candles">
      <h1>CANDLES FOR CODERS</h1>
      {candles.map((candle, id) => {
        return <Candle key={id} candle={candle} />;
      })}
    </div>
  );
}

export default Candles;
