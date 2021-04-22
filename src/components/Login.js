import styled from "styled-components";

import React from "react";

function Login() {
  return (
    <Container>
      <Content>
        <Logos>
          <LogoOne src="/images/cta-logo-one.svg" alt="" />
          <SingInButton>GET ALL THERE</SingInButton>
          <Paragraph>
            Get Premier Access to Raya nad the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by 1$.
          </Paragraph>
          <LogoTwo src="./images/cta-logo-two.png" alt="" />
        </Logos>
        <BackgroundImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  text-align: center;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 80px 40px;
`;

const BackgroundImage = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-size: cover;
  background-image: url("./images/login-background.jpg");
  z-index: -1;
`;

const Logos = styled.div`
  width: 100%;
  margin-bottom: 2vw;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
`;

const LogoOne = styled.img`
  display: block;
  max-width: 600px;
  min-height: 1px;
  position: relative;
  width: 100%;
  margin-bottom: 10px;
`;

const SingInButton = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  margin-bottom: 12px;
  font-size: 32px;
  letter-spacing: 1.5px;
  padding: 16px 0;
  border: 1px solid transparent;
  border-radius: 5px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  color: #f9f9f9;
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 24px;
  letter-spacing: 1.5px;
`;

const LogoTwo = styled.img`
  display: block;
  max-width: 600px;
  min-height: 1px;
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  margin-top: 10px;
`;

export default Login;
