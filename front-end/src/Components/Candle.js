import { Link } from "react-router-dom";

function Candle({ candle, id }) {
  return (
    <div className="candle">
      <div>{candle.name}</div>
      <p>${candle.price.toFixed(2)}</p>
      <p>
        <Link to={`/candles/${id}`}>More Details</Link>
      </p>
    </div>
  );
}

export default Candle;
