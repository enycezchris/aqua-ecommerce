import styled from "styled-components";
import { Link as A } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoIcon from "@mui/icons-material/Info";

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  opacity: 0;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 3px;
  min-width: 200px;
  height: 400px;
  border: 1px solid #87cbb9;
  position: relative;
  &: hover ${IconContainer} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  height: 40%;
  width: 80%;
  z-index: 2;
  border-radius: 12px;
`;
export const Info = styled.p`
  color: #87cbb9;
  font-weight: 600;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 50%;
  background-color: #577d86;
  border: 1px solid #87cbb9;
  transition: all 0.7s ease;
  &:hover {
    transform: scale(1.3);
    cursor: pointer;
  }
`;

export const test1 = styled.div``;

export const ShopIcon = styled(AddShoppingCartIcon)`
  color: #87cbb9;
`;

export const Detail = styled(InfoIcon)`
  color: #87cbb9;
`;

export const ProductBackground = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background-color: #87cbb9;
  opacity: 0.25;
  position: absolute;
`;
