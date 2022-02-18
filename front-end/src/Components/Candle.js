import { Link } from "react-router-dom";

function Candle({ candle, id }) {
  return (
    <div>
      Enjoy linux, I'm good.
      {candle.name}
      <Link to="/candles/:id">More Details</Link>
    </div>
  );
}

export default Candle;
