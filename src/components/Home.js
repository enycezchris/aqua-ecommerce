import React, { useContext, useEffect } from "react";
import { Container, Wrapper, Nav } from "../styles/HomeStyles";
import { Link } from "react-router-dom";
import CartContext from "../context/cartContext";
import axios from "axios";
import AuthContext from "../context/authContext";

const Home = () => {
  const { cartTotalItems } = useContext(CartContext);
  const { auth} = useContext(AuthContext);
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
      {/* Check if auth object is empty */}
      {Object.keys(auth).length > 0 ? (
        <Nav>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart({cartTotalItems})</Link>
          <Link to="/order">Order</Link>
          <span>Welcome, {auth.username}!</span>
          <button
            onClick={() => {
              handleLogOut();
            }}
          >
            Logout
          </button>
        </Nav>
      ) : (
        <Nav>
          <Link to="/products">Products</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </Nav>
      )}
    </Container>
  );
};

export default Home;
