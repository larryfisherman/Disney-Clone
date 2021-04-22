import styled from "styled-components";
import React from "react";

function Header() {
  return (
    <Nav>
      <NavLogo src="./images/logo.svg" alt="" />
      <LoginButton>LOGIN</LoginButton>
    </Nav>
  );
}

const Nav = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  padding: 20px 30px;
  height: 85px;
  align-items: center;
  justify-content: space-between;
  background-color: #040714;
  color: #f9f9f9;
  z-index: 1;
`;

const NavLogo = styled.img`
  position: relative;
  box-sizing: border-box;
  height: 60px;
  cursor: pointer;
`;

const LoginButton = styled.button`
  background: transparent;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  color: #f9f9f9;
  padding: 10px 15px;
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
`;

export default Header;
