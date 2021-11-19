import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
  background-color: dodgerblue;
  margin-top: 0;
  height: 60px;
  padding-top: 15px;
  font-size: 25px;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};

function Navbar() {
  return (
    <NavUnlisted>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/products" style={linkStyle}>
        Products
      </Link>
    </NavUnlisted>
  );
}

export default Navbar;
