import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CandleDetails() {
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const [candle, setCandle] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/candles/${id}`)
      .then((response) => setCandle(response.data));
  }, [id, API]);

  return (
    <div className="candle">
      The best scent of 2022
      <div>{candle.name}</div>
    </div>
  );
}

export default CandleDetails;
