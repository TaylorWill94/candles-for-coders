import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function CandleDetails() {
  const { id } = useParams();
  const API = process.env.REACT_APP_API_URL;
  const [candle, setCandle] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/candles/${id}`)
      .then((response) => setCandle(response.data))
      .catch((error) => console.warn(error));
  }, [id, API]);

  return (
    <div className="candle">
      <br />
      <br />
      The best scent of 2022
      <br />
      <br />
      <div>{candle.name}</div>
      <br />
      <div>{candle.description}</div>
      <p>
        <Link to="/candles">
          <button>Back</button>
        </Link>
      </p>
      <p>
        <Link to={`/candles/${id}/edit`}>
          <button>Edit</button>
        </Link>
      </p>
      <p>
        <button>Delete</button>
      </p>
      <div>
        <h2>REVIEWS</h2>
        <p>Beyonce: My favorite candle ⭐️⭐️⭐️⭐️⭐️</p>
      </div>
    </div>
  );
}

export default CandleDetails;
