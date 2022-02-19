import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewCandle() {
  const API = process.env.REACT_APP_API_URL;
  let navigate = useNavigate();

  const addedCandle = (addCandle) => {
    axios
      .post(`${API}/candles`, addCandle)
      .then(
        () => {
          navigate("/candles");
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const [newCandle, setNewCandle] = useState({
    name: "",
    description: "",
    price: 0,
    rating: 0,
    featured: false,
  });

  const handleText = (event) => {
    setNewCandle({ ...newCandle, [event.target.id]: event.target.value });
  };

  const handleCheckBox = () => {
    setNewCandle({ ...newCandle, featured: !newCandle.featured });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addedCandle(newCandle);
  };

  return (
    <div className="new-form">
      <br />
      <br />
      <h1>CREATE YOUR OWN CANDLE</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NAME:</label>
        <br />
        <input
          type="text"
          id="name"
          value={newCandle.name}
          onChange={handleText}
          placeholder="NAME ME"
        />
        <br />
        <label htmlFor="description">DESCRIPTION:</label>
        <br />
        <input
          type="text"
          id="description"
          value={newCandle.description}
          onChange={handleText}
          placeholder="DESCRIBE ME"
        />
        <br />
        <label htmlFor="price">PRICE:</label>
        <br />
        <input
          type="number"
          id="price"
          value={newCandle.price}
          onChange={handleText}
          placeholder="$$$"
        />
        <br />
        <label htmlFor="rating">RATING:</label>
        <br />
        <input
          type="number"
          id="rating"
          value={newCandle.rating}
          onChange={handleText}
          placeholder="5 STARS?"
        />
        <br />
        <label htmlFor="featured">FEATURED:</label>
        <br />
        <input
          type="checkbox"
          id="featured"
          value={newCandle.featured}
          onChange={handleCheckBox}
          placeholder="FAV"
        />
        <br />
        <input type="submit" />
      </form>
      <br />
      <br />
    </div>
  );
}

export default NewCandle;
