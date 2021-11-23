import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
  text-align: center;
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
      <Link to="/products" style={linkStyle}>
        All Products
      </Link>
    </NavUnlisted>
  );
}

export default Navbar;
