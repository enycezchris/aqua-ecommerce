import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { carouselData } from "./utils/carouselData";
import {
  Container,
  ArrowContainer,
  Wrapper,
  CarouselContainer,
  CarouselInfoContainer,
  CarouselImageContainer,
  Image,
  Category,
  Description,
  Button,
} from "../styled-components/Carousel";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  // setting the carousel index( slide 0 , slide 1, etc...) default to 0
  const [carouselIndex, setCarouselIndex] = useState(0);
  const handleArrowDirection = (direction) => {
    if (direction === "back") {
      // if the direction is "back", check if the index is greater than 0 (first slide) if it is greater than 0 (not the first slide), set the carouselIndex to index - 1 (prev slide), if its not greater than 0 (it is the first slide), set the carouselIndex to last slide (3)
      setCarouselIndex(carouselIndex > 0 ? carouselIndex - 1 : 3);
    } else {
      // if the direction is "forward", check if the index is less than 3 (last slide),if it is less than 3 (it is the last slide) then increase the index by 1 (next slide), if its not less 3 (there is no next slide) set the index to 0 (first slide)
      setCarouselIndex(carouselIndex < 3 ? carouselIndex + 1 : 0);
    }
  };
  return (
    <Container>
      {/* Can pass props with styled-components */}
      <ArrowContainer
        direction="back"
        onClick={() => {
          handleArrowDirection("back");
        }}
      >
        <ArrowBackIosNewIcon />
      </ArrowContainer>
      <Wrapper carouselIndex={carouselIndex}>
        {carouselData.map((data) => {
          return (
            <CarouselContainer key={data.id} bgColor={data.bgColor}>
              <CarouselImageContainer>
                <Image src={data.img} />
              </CarouselImageContainer>
              <CarouselInfoContainer>
                <Category>{data.category}</Category>
                <Description>{data.description}</Description>
                <Button>Shop</Button>
              </CarouselInfoContainer>
            </CarouselContainer>
          );
        })}
      </Wrapper>
      <ArrowContainer
        direction="forward"
        onClick={() => {
          handleArrowDirection("forward");
        }}
      >
        <ArrowForwardIosIcon />
      </ArrowContainer>
    </Container>
  );
};

export default Carousel;
