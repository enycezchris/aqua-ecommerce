import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Products from "../src/components/Products";
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import Order from "./components/Order";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ResetPassword from "./components/ResetPassword";
import UpdatePassword from "./components/UpdatePassword";
import Confirmation from "./components/Confirmation";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="products" element={<Products />} />
      <Route exact path="product/:id" element={<ProductDetails />} />
      <Route exact path="cart" element={<Cart />} />
      <Route exact path="order" element={<Order />} />
      <Route exact path="reset" element={<ResetPassword />} />
      <Route exact path="reset/:token" element={<UpdatePassword />} />
      <Route exact path="login" element={<LoginForm />} />
      <Route exact path="register" element={<RegisterForm />} />
      <Route exact path="confirmation" element={<Confirmation />} />
      <Route exact path="checkout" element={<Checkout />} />
    </Routes>
  );
};

export default App;
