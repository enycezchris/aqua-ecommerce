import React, { useContext } from "react";
import {
  Container,
  Wrapper,
  NavItemLeft,
  NavItemMiddle,
  NavItemRight,
  Link,
  DropDownMenu,
  DropDownContent,
  DropDownLinks,
  Cart,
  ShoppingCart,
  LogoutButton,
} from "../styled-components/Navbar";
import Badge from "@mui/material/Badge";
import CartContext from "../context/cartContext";
import axios from "axios";
import AuthContext from "../context/authContext";

const Navbar = () => {
  const { cartTotalItems } = useContext(CartContext);
  const { auth } = useContext(AuthContext);
  const logoutURL = "/auth/logout";
  const handleLogOut = async () => {
    await axios.post(logoutURL).then((response) => {
      console.log(response.data);
    });
    window.location.href = "/";
  };

  console.log("auth", auth);

  return (
    <Container>
      {Object.keys(auth).length > 0 ? (
        <Wrapper>
          <NavItemLeft>
            <Link to="/">Logo</Link>
          </NavItemLeft>
          <NavItemMiddle>Search</NavItemMiddle>
          <NavItemRight>
            <DropDownMenu>
              {/* void(0) on Link => Link goes to nowhere */}
              <Link to={void 0}>Welcome, {auth.username}</Link>
              <DropDownContent>
                <DropDownLinks to="/profile">Profile</DropDownLinks>
                <DropDownLinks to="/order">Order History</DropDownLinks>
                <LogoutButton
                  onClick={() => {
                    handleLogOut();
                  }}
                >
                  Logout
                </LogoutButton>
              </DropDownContent>
            </DropDownMenu>
            <Badge badgeContent={cartTotalItems} color="primary">
              <Cart to="/cart">
                <ShoppingCart />
              </Cart>
            </Badge>
          </NavItemRight>
        </Wrapper>
      ) : (
        <Wrapper>
          <NavItemLeft>
            <Link to="/">Logo</Link>
          </NavItemLeft>
          <NavItemRight>
            <Link to="/login">Sign In</Link>
            <Link to="/register">Sign Up</Link>
          </NavItemRight>
        </Wrapper>
      )}
    </Container>
  );
};

export default Navbar;
