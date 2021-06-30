import styled from "styled-components";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import HomeSlider from "./HomeSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trendings from "./Trendings";
import { setMovies } from "../store/movieSlice";
import { selectUser } from "../store/userSlice";

function Home() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  let newDisney = [];
  let original = [];
  let trending = [];
  let recommends = [];

  useEffect(() => {
    axios
      .get("https://disneyclone-api-app.azurewebsites.net/api/movies/")
      .then((response) => {
        response.data.map((doc) => {
          switch (doc.type) {
            case "new":
              newDisney = [
                ...newDisney,
                {
                  id: doc.id,
                  ...doc,
                },
              ];
              break;
            case "recommend":
              recommends = [
                ...recommends,
                {
                  id: doc.id,
                  ...doc,
                },
              ];
              break;
            case "trending":
              trending = [
                ...trending,
                {
                  id: doc.id,
                  ...doc,
                },
              ];
              break;
            case "original":
              original = [
                ...original,
                {
                  id: doc.id,
                  ...doc,
                },
              ];
              break;
            default:
              return null;
          }
          dispatch(
            setMovies({
              recommends: recommends,
              newDisney,
              trending,
              original,
            })
          );
        });
      });
  }, [user?.user]);

  return (
    <Container>
      <HomeSlider />
      <Viewers />
      <Recommends />
      <Originals />
      <NewDisney />
      <Trendings />
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
