import styled from "styled-components";
import { Link as A } from "react-router-dom";

export const Link = styled(A)`
  text-decoration: none;
  padding: 5px;
  color: #87cbb9;
  font-weight: bold;
  border: 2px solid #87cbb9;
  box-shadow: 2px 2px 4px 0px #87cbb9;
  margin-right: 5px;

  &:hover {
    background-color: #87cbb9;
    color: #577d86;
  }
`;

export const Section = styled.section`
  text-align: center;
  padding: 30px;
`;

export const ProductsContainer = styled.div`
  background-color: #577d86;
`;

export const Container = styled.div`
  display: flex;
  padding: 30px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
