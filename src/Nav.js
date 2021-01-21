import { Link } from "react-router-dom";
import "./App.css";

function Nav() {
  const navStyle = {
    color: "black",
  };

  return (
    <nav className="nav">
      <h3>Two pages routing</h3>
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
