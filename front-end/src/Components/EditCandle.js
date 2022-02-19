import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditCandle() {
  const API = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  let navigate = useNavigate();

  const [editCandle, setEditCandle] = useState({
    name: "",
    description: "",
    price: 0,
    rating: 0,
    featured: false,
  });

  const editedCandle = (editCandle) => {
    axios
      .put(`${API}/candles/${id}`, editCandle)
      .then(
        () => {
          navigate(`/candles/${id}`);
        },
        (error) => console.warn(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleText = (event) => {
    setEditCandle({ ...editCandle, [event.target.id]: event.target.value });
  };

  const handleCheckBox = () => {
    setEditCandle({ ...editCandle, featured: !editCandle.featured });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editedCandle(editCandle, id);
  };

  return (
    <div className="edit">
      <br />
      <br />
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">NAME:</label>
        <br />
        <input
          type="text"
          id="name"
          value={editCandle.name}
          onChange={handleText}
          placeholder="CHANGE ME"
        />
        <br />
        <label htmlFor="description">DESCRIPTION:</label>
        <br />
        <input
          type="text"
          id="description"
          value={editCandle.description}
          onChange={handleText}
          placeholder="DESCRIBE ME"
        />
        <br />
        <label htmlFor="price">PRICE:</label>
        <br />
        <input
          type="number"
          id="price"
          value={editCandle.price}
          onChange={handleText}
          placeholder="$$$"
        />
        <br />
        <label htmlFor="rating">RATING:</label>
        <br />
        <input
          type="number"
          id="rating"
          value={editCandle.rating}
          onChange={handleText}
          placeholder="5 STARS?"
        />
        <br />
        <label htmlFor="featured">FEATURED:</label>
        <br />
        <input
          type="checkbox"
          id="featured"
          value={editCandle.featured}
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

export default EditCandle;
