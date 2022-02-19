import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link to="/contact">
        <h2>Contact</h2>
      </Link>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Footer;
