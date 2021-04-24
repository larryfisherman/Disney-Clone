import styled from "styled-components";

import React from "react";

function Viewers() {
  return (
    <Container>
      <Viewer>
        <img src="./images/viewers-disney.png" alt="disney" />
        <video autoPlay={true} loop={true} playsInLine={true}>
          <source src="./videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Viewer>
      <Viewer>
        <img src="./images/viewers-marvel.png" alt="marvel" />
        <video autoPlay={true} loop={true} playsInLine={true}>
          <source src="./videos/1564676115-marvel.mp4" type="video/mp4" />
        </video>
      </Viewer>
      <Viewer>
        <img src="./images/viewers-national.png" alt="national" />
        <video autoPlay={true} loop={true} playsInLine={true}>
          <source
            src="./videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Viewer>
      <Viewer>
        <img src="./images/viewers-pixar.png" alt="pixar" />
        <video autoPlay={true} loop={true} playsInLine={true}>
          <source src="./videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Viewer>
      <Viewer>
        <img src="./images/viewers-starwars.png" alt="starwars" />
        <video autoPlay={true} loop={true} playsInLine={true}>
          <source src="./videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Viewer>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Viewer = styled.div`
  padding-top: 50%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 2px solid rgb(255, 255, 255, 0.5);
  border-radius: 10px;

  img {
    position: absolute;
    display: block;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 1;
  }

  video {
    position: absolute;
    display: block;
    top: 0px;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
