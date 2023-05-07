import styled from "styled-components";

export const Container = styled.div`
  background-color: #577d86;
  display: flex;
  height: 100vh;
  margin-bottom: 100px;
`;

export const Title = styled.h1`
  color: #57cbb9;
  text-align: center;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: 0.5rem;
  text-decoration: underline;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ProductDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 80%;
  border-radius: 12px;
`;

export const Info = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: #57cbb9;
  font-weight: 400;
  letter-spacing: 0.2rem;
  margin-right: 20px;
`;

export const Price = styled.span`
  text-align: center;
  color: #57cbb9;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Button = styled.button`
  padding: 15px;
  width: 20%;
  margin: 50px 0 0 0;
  background-color: #577d86;
  color: #57cbb9;
  font-weight: 900;
  font-size: 1rem;
  border: 1px solid #57cbb9;
  transition: all 0.5s ease;
  border-radius: 12px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.25),
    0 17px 50px 0 rgba(0, 0, 0, 0.2);
  &: hover {
    cursor: pointer;
    background-color: #57cbb9;
    color: #577d86;
  }
`;
