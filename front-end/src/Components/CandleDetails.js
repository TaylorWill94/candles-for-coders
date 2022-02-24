import axios from "axios";
import Button from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function CandleDetails() {
  const { id } = useParams();
  const API = process.env.REACT_APP_API_URL;
  let navigate = useNavigate();
  const [candle, setCandle] = useState({});

  useEffect(() => {
    axios
      .get(`${API}/candles/${id}`)
      .then((response) => setCandle(response.data))
      .catch((error) => console.warn(error));
  }, [id, API]);

  const handleDelete = () => {
    axios.delete(`${API}/candles/${id}`).then(() => {
      navigate("/candles");
    });
  };

  return (
    <div className="candle">
      <br />
      <br />
      <h1>The best scent of 2022</h1>
      <br />
      <br />
      <div>
        <h2>{candle.name}</h2>
      </div>
      <br />
      <div>{candle.description}</div>
      <br />
      <br />
      <div>${candle.price.toFixed(2)}</div>
      <br />
      <br />
      <p>
        <Link to="/candles">
          <button className="btn btn-primary">Back</button>
        </Link>
      </p>
      <p>
        <Link to={`/candles/${id}/edit`}>
          <button>Edit</button>
        </Link>
      </p>
      <p>
        {/* <Link to="/cart"> */}
        <button>Add To Cart</button>
        {/* </Link> */}
      </p>
      <p>
        <button onClick={handleDelete}>Delete</button>
      </p>
      <br />
      <br />
      <br />
      <br />
      <div>
        <h2>REVIEWS</h2>
        <p>Beyonce: My favorite candle ⭐️⭐️⭐️⭐️⭐️</p>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default CandleDetails;
