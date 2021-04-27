import styled from "styled-components";
import React from "react";
import { useSelector } from "react-redux";
import { selectRecommends } from "../store/movieSlice";
import { Link } from "react-router-dom";

function Recommends() {
  const recommends = useSelector(selectRecommends);

  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {recommends &&
          recommends.map((movie, key) => (
            <Image key={key}>
              <Link to={`/details/` + movie.id}>
                <img src={movie.cardImage} alt={movie.title} />
              </Link>
            </Image>
          ))}
      </Content>
    </Container>
  );
}

export default Recommends;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Image = styled.div`
  padding-top: 50%;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 2px solid rgb(255, 255, 255, 0.5);
  border-radius: 10px;
  margin-bottom: 25px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  }

  &:hover {
    transition: all 0.3s ease-out;
    transform: scale(1.03);
    border: 2px solid rgb(255, 255, 255, 1);
  }
`;
