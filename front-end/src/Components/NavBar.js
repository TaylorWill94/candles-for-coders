import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <br />
      <Link to="/">
        <h1 className="app-header">CERTIFIED LOVER CANDLES</h1>
      </Link>
      <br />
      <Link to="/">
        <h2 className="nav-link">home</h2>
      </Link>
      <Link to="/candles">
        <h2 className="nav-link">shop</h2>
      </Link>
      <Link to="/contact">
        <h2 className="nav-link">contact</h2>
      </Link>
      <Link to="/about">
        <h2 className="nav-link">about</h2>
      </Link>
      <Link to="/candles/new">
        <h2 className="nav-link">create your own candle</h2>
      </Link>
      <h2>search</h2>
      <Link to="/cart">
        <h2 className="nav-link">cart</h2>
      </Link>
    </nav>
  );
}

export default NavBar;
