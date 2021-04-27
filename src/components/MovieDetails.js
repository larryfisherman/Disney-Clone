import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase/firebase";

function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setDetails(doc.data());
        } else {
          console.log("No doc in firebase");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(details);
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={details.backgroundImage} alt={details.title} />
      </Background>
      <ImageTitle>
        <img src={details.titleImage} alt="" />
      </ImageTitle>
      <Content>
        <Buttons>
          <PlayerButton>
            <img src="/images/play-icon-black.png" alt="" />
            Play
          </PlayerButton>
          <TrailerButton>
            <img src="/images/play-icon-white.png" alt="" />
            Trailer
          </TrailerButton>
          <AddToList>
            <span />
            <span />
          </AddToList>
          <GroupWatching>
            <img src="/images/group-icon.png" alt="" />
          </GroupWatching>
        </Buttons>

        <Subtitle>
          <span>{details.subTitle}</span>
        </Subtitle>
        <Description>
          <span>{details.description}</span>
        </Description>
      </Content>
    </Container>
  );
}

export default MovieDetails;

const Container = styled.div`
  position: relative;
  display: block;
  min-height: 100vh;
  overflow-x: hidden;
  top: 0;
`;

const Background = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
      background-image: cover;
    }
  }
`;

const ImageTitle = styled.div`
  display: flex;
  height: 30vh;
  width: 100%;
  margin-left: 30px;

  img {
    max-width: 600px;
    min-width: 200px;
  }
`;

const Content = styled.div`
  max-width: 874px;
  margin: 0px 0px 0px 30px;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const PlayerButton = styled.button`
  display: flex;
  font-size: 20px;
  padding: 0px 36px;
  height: 60px;
  margin-right: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: black;
  letter-spacing: 3px;
  text-transform: uppercase;
  border: none;

  img {
    width: 40px;
  }

  &:hover {
    background-color: rgb(180, 180, 180);
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 15px;
    letter-spacing: 1.5px;

    img {
      width: 30px;
    }
  }
`;

const TrailerButton = styled(PlayerButton)`
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid rgba(240, 240, 240);
  color: #f9f9f9;
  padding: 0px 25px;

  &:hover {
    color: black;
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 15px;
  }
`;

const AddToList = styled.div`
  margin-right: 16px;
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;

const GroupWatching = styled.div`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid white;

  div {
    height: 40px;
    width: 40px;
    background: rgb(0, 0, 0);
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;

const Subtitle = styled.div`
  margin-top: 32px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Description = styled.div`
  font-size: 25px;
  line-height: 30px;
  padding: 32px 0px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
