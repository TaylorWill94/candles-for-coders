import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/">
        <h1>home</h1>
      </Link>
      <Link to="/candles">
        <h1>shop</h1>
      </Link>
      <h1>contact</h1>
      <h1>about</h1>
      <h1>search</h1>
    </nav>
  );
}

export default NavBar;
