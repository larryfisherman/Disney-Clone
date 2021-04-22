import styled from "styled-components";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase/firebase";
import { selectUser } from "../store/userSlice";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  const user = useSelector(selectUser);

  return (
    <Nav>
      <NavLogo src="./images/logo.svg" alt="" />
      <NavMenu>
        <a href="/home">
          <img src="./images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a href="">
          <img src="./images/watchlist-icon.svg" alt="watchList" />
          <span>WATCH LIST</span>
        </a>
        <a href="">
          <img src="./images/movie-icon.svg" alt="movie" />
          <span>MOVIES</span>
        </a>
        <a href="">
          <img src="./images/series-icon.svg" alt="series" />
          <span>SERIES</span>
        </a>
        <a href="">
          <img src="./images/original-icon.svg" alt="original" />
          <span>ORIGINAL</span>
        </a>
        <a href="">
          <img src="./images/search-icon.svg" alt="search" />
          <span>SEARCH</span>
        </a>
      </NavMenu>
      <LoginButton
        onClick={() =>
          auth.signInWithPopup(provider).catch((error) => alert(error.message))
        }
      >
        LOGIN
      </LoginButton>
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

const LoginButton = styled.a`
  background: transparent;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  color: #f9f9f9;
  padding: 10px 15px;
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
  margin-right: 50px;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
    font-weight: 550;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row nowrap;
  height: 100%;
  position: relative;
  margin-left: 25px;
  margin-right: auto;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      width: 20px;
      min-width: 20px;
    }

    @media (max-width: 768px) {
      display: none;
    }

    span {
      color: #f9f9f9;
      font-size: 18px;
      letter-spacing: 3px;
      line-height: 18px;
      padding: 0 10px;
      position: relative;

      &:before {
        content: "";
        background-color: #f9f9f9;
        border-radius: 0px 0px 4px 4px;
        bottom: -8px;
        height: 2px;
        opacity: 0;
        left: 7px;
        right: 7px;
        position: absolute;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms ease-out;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;

export default Header;
