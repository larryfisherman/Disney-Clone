import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const history = useHistory();

  return (
    <Container>
      <Content>
        <Link to="/">
          <NavLogo src="./images/logo2.svg" alt="" />
        </Link>

        <p>Register with your email</p>
        <EmailInput
          placeholder="Email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <PasswordInput
          placeholder="Password"
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
          type="password"
        />
        <Button
          onClick={() => {
            axios
              .post("https://localhost:5001/api/account/register", {
                email: userEmail,
                password: userPassword,
              })
              .then(history.push("/loginPage"));
          }}
        >
          CONTINUE
        </Button>
        <LoginDescription>
          <Link to="/loginPage">Already have account? Sign in!</Link>
        </LoginDescription>
      </Content>
    </Container>
  );
}

const LoginDescription = styled.p`
  line-height: 2rem;
  font-size: 0.6rem;
`;

const Container = styled.div`
  background-color: #1a1d29;
  width: 100%;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  justify-contente: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
  font-weight: 550;
  letter-spacing: 2px;
  line-height: 10px;
  font-size: 1.875rem;
`;

const NavLogo = styled.img`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
`;

const EmailInput = styled.input`
  padding: 15px;
  width: 21.875rem;
  background-color: rgb(49, 52, 62);
  border: none;
  border-radius: 3px;
  margin-bottom: 20px;
  color: #f9f9f9;
`;

const PasswordInput = styled.input`
  padding: 15px;
  width: 21.875rem;
  background-color: rgb(49, 52, 62);
  border: none;
  border-radius: 3px;
  margin-bottom: 40px;
  color: #f9f9f9;
`;

const Button = styled.button`
  height: 50px;
  width: 21.875rem;
  background-color: rgb(0, 114, 210);
  border: none;
  border-radius: 3px;
  color: white;
  font-size: 1.5rem;
  letter-spacing: 2px;
`;

export default LoginPage;
