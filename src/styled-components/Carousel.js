import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  color: #87cbb9;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translatex(${(props) => props.carouselIndex * -100}vw);
  transition: all 1s ease;
`;

// transform: translatex => moves the div on the x axis (horizontally)
// transition; adds an animation to all the slides when arrow clicked

export const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  background-color: #577d86;
  border-radius: 50%;
  border: 1px solid #87cbb9;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "back" && "10px"};
  right: ${(props) => props.direction === "forward" && "10px"};
  cursor: pointer;
  opacity: 0.35;
  z-index: 2;
`;
//   top:0 , bottom: 0 margin: auto; => centers the Container in the middle
// props => props.direction takes the props from React component and use it with styled-components
// left: if props.direction is back, then left 10px
// right: if props.direction is forward, then right 10px

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
`;

export const CarouselImageContainer = styled.div`
  height: 100%;
  flex: 5;
`;

export const Image = styled.img`
  border-radius: 20%;
  height: 90%;
  width: 100%;
  margin: 20px 0px 20px 20px;
  opacity: 0.8;
`;

export const CarouselInfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

export const Category = styled.h1`
  font-weight: 900;
  white-space: nowrap;
  font-size: 2.5rem;
`;

export const Description = styled.p`
  color: #87cbb9;
  font-weight: 450;
  font-size: 1rem;
  letter-spacing: 2px;
`;

export const Button = styled.button`
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #87cbb9;
  background-color: transparent;
  color: #87cbb9;
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
`;
