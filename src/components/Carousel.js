import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { carouselData } from "./utils/carouselData";
import {
  Container,
  ArrowDirection,
  Wrapper,
  Slide,
  Image,
  ImageDiv,
  InfoDiv,
  Title,
  Button,
} from "../styled-components/Carousel";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const [slideItem, setSlideItem] = useState(0);
  const navigate = useNavigate();
  const arrowClick = (direction) => {
    if (direction === "back") {
      setSlideItem(slideItem > 0 ? slideItem - 1 : 3);
    } else {
      setSlideItem(slideItem < 3 ? slideItem + 1 : 0);
    }
  };
  return (
    <Container>
      <ArrowDirection direction="back" onClick={() => arrowClick("back")}>
        <ArrowBackIosNewIcon />
      </ArrowDirection>
      <Wrapper slideItem={slideItem}>
        {carouselData.map((slideItem) => {
          return (
            <Slide key={slideItem.id}>
              <ImageDiv>
                <Image src={slideItem.img}></Image>
              </ImageDiv>
              <InfoDiv>
                <Title>{slideItem.category}</Title>
                <Button
                  onClick={() => {
                    navigate("/products");
                  }}
                >
                  Shop Now
                </Button>
              </InfoDiv>
            </Slide>
          );
        })}
      </Wrapper>
      <ArrowDirection direction="forward" onClick={() => arrowClick("forward")}>
        <ArrowForwardIosIcon />
      </ArrowDirection>
    </Container>
  );
};

export default Carousel;
