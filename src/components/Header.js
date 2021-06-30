import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../store/userSlice";
import { Avatar } from "@material-ui/core";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <Nav>
      <Link to="/">
        <NavLogo src="./images/logo.svg" alt="" />
      </Link>
      {!user.user ? (
        <Link to="/registerPage">
          <LoginButton>REGISTER</LoginButton>
        </Link>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="./images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a>
              <img src="./images/watchlist-icon.svg" alt="watchList" />
              <span>WATCH LIST</span>
            </a>
            <a>
              <img src="./images/movie-icon.svg" alt="movie" />
              <span>MOVIES</span>
            </a>
            <a>
              <img src="./images/series-icon.svg" alt="series" />
              <span>SERIES</span>
            </a>
            <a>
              <img src="./images/original-icon.svg" alt="original" />
              <span>ORIGINAL</span>
            </a>
            <a>
              <img src="./images/search-icon.svg" alt="search" />
              <span>SEARCH</span>
            </a>
          </NavMenu>
          <LogoutButton>
            <Avatar />
            <DropDown>
              <span
                onClick={() => {
                  dispatch(logout());
                  localStorage.removeItem("token");
                }}
              >
                Sign Out
              </span>
            </DropDown>
          </LogoutButton>
        </>
      )}
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
  z-index: 999;
`;

const NavLogo = styled.img`
  position: relative;
  box-sizing: border-box;
  height: 60px;
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
  cursor: pointer;

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
  cursor: pointer;

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

const DropDown = styled.div`
  position: absolute;
  top: 50px;
  right: 5px;
  background: rgb(19, 19, 19);
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  padding: 10px;
  letter-spacing: 3px;
  width: 150px;
  text-align: center;
  cursor: pointer;
  opacity: 0.6;
  display: none;
`;

const UserImage = styled.img`
  height: 100%;
`;

const LogoutButton = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  width: 50px;
  ${UserImage} {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }
  &:hover {
    ${DropDown} {
      display: block;
    }
  }
`;

export default Header;
