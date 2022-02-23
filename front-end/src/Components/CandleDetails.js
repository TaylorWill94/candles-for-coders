import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Cart from "./Cart";

function CandleDetails() {
  const { id } = useParams();
  const API = process.env.REACT_APP_API_URL;
  let navigate = useNavigate();
  const [addCandle, setAddCandle] = useState([]);
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

  const addProduct = (candle) => {
    setAddCandle([...addCandle, candle.name]);
  };

  console.log(addCandle);

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
        {/* <Link to="/cart"> */}
        <button onClick={() => addProduct(candle)}>Add To Cart</button>
        {/* </Link> */}
      </p>
      <p>
        <button onClick={handleDelete}>Delete</button>
      </p>
      <div>
        <h2>REVIEWS</h2>
        <p>Beyonce: My favorite candle ⭐️⭐️⭐️⭐️⭐️</p>
      </div>
      <br />
      <br />
      <h1>Cart:</h1>
      <br />
      {addCandle}
      <br />
      <br />
    </div>
  );
}

export default CandleDetails;
