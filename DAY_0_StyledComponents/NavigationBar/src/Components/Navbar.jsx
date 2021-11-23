import React from "react";
import styled from "styled-components";

const NavBarWrapper = styled.header`
  position: relative;
  height: 80px;
  background-color: dodgerblue;
  transition: 0.2s;
`;

const Logo = styled.div`
  position: absolute;
  top: 15px;
  left: 30px;
  height: 60px;
  transition: 0.2s;

  @media all and (max-width: 580px) {
    display: none;
  }
`;

const ResourceLinks = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  position: absolute;
  top: 25px;
  right: 40px;
  letter-spacing: 1px;
  transition: 0.2s;

  @media all and (max-width: 700px) {
    margin: auto;
    font-size: 15px;
    top: 25px;
  }
`;

const A = styled.a`
  text-decoration: none;
  color: #fff;
  margin-left: 50px;
  cursor: pointer;
  transition: 0.2s;

  @media all and (max-width: 700px) {
    margin-left: 20px;
    top: 25px;
  }
`;

function NavBar() {
  return (
    <NavBarWrapper>
      <Logo>
        <img
          width="120px"
          src="https://d27028dliefpk3.cloudfront.net/assets/brand/masaischool-logo.svg"
          alt="logo.png"
        />
      </Logo>
      <ResourceLinks>
        <A>About us</A>
        <A>Prices</A>
        <A>Start page</A>
        <A>Offer</A>
        <A>Contact</A>
      </ResourceLinks>
    </NavBarWrapper>
  );
}

export default NavBar;
