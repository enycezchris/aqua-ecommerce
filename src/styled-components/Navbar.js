import styled from "styled-components";
import { Link as A } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Container = styled.div`
  height: 70px;
  background-color: #577d86;
  color: #87cbb9;
  font-weight: bold;
  border-radius: 2px;
  border-bottom: 3px solid #87cbb9;
`;
export const Wrapper = styled.ul`
  margin: 0;
  padding: 10px 20px;
  display: flex;
  overflow: hidden;
  justify-content: space-evenly;
  font-size: 15px;
  align-items: center;
  list-style: none;
`;

export const ShoppingCart = styled(ShoppingCartIcon)``;

export const NavItemLeft = styled.div`
  margin-top: 10px;
  flex: 7;
`;
export const NavItemMiddle = styled.div`
  margin-top: 10px;
  flex: 3;
`;
export const NavItemRight = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const Link = styled(A)`
  text-decoration: none;
  color: #87cbb9;
  font-weight: bold;
  white-space: nowrap;
`;

export const Cart = styled(A)`
  text-decoration: none;
  color: #87cbb9;
  font-weight: bold;
  margin-left: 50px;
`;

export const DropDownLinks = styled(A)`
  text-decoration: none;
  display: block;
  background-color: #577d86;
  color: #87cbb9;
  padding: 12px 16px;
  &: hover {
    background-color: #87cbb9;
    color: #577d86;
  }
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 1;
  min-width: 160px;
  margin-top: 1px;
  text-align: center;
  box-shadow: 0px 0px 10px 2px #87cbb9;
`;

export const DropDownMenu = styled.li`
  display: inline-block;
  &: hover ${DropDownContent} {
    display: block;
  }
`;

export const LogoutButton = styled.button`
  color: #87cbb9;
  background-color: #577d86;
  border: none;
  font-weight: bold;
  font-size: 15px;
  padding: 10px;
  width: 100%;
  text-align: center;
  &: hover {
    cursor: pointer;
    background-color: #87cbb9;
    color: #577d86;
  }
`;
