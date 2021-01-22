import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.nav`
  display: flex;
  font-family: UniNeueRegular, sans-serif;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  justify-content: space-around;
  align-items: center;
  min-height: 4.5vh;
  background: #fff;
  transform: translateY(0) scale(1);
  border-bottom: solid 1px #cdcccf;
`;

const Nav = () => (
  <Navigation>
    <Link className="_homeLink" to="/">
      <h3>Pages routing</h3>
    </Link>
    <ul className="nav-links">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
    </ul>
  </Navigation>
);

export default Nav;
