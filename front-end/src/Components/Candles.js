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
      <header>CANDLES FOR CODERS</header>
      {candles.map((candle, id) => {
        return <Candle key={id} candle={candle} />;
      })}
    </div>
  );
}

export default Candles;
