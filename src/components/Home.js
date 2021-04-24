import styled from "styled-components";
import React from "react";
import HomeSlider from "./HomeSlider";
import Viewers from "./Viewers";

function Home() {
  return (
    <Container>
      <HomeSlider />
      <Viewers />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  display: block;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 0 calc(3.5vw + 50px);
  &:after {
    position: absolute;
    background: url("./images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    z-index: -1;
    inset: 0;
  }
`;

export default Home;
