import { Link } from "react-router-dom";
import "./App.css";

function Nav() {
  const navStyle = {
    color: "black",
  };

  return (
    <nav className="nav">
      <Link className="_homeLink" to="/">
        <h3>Pages routing</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
