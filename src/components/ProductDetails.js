import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CartContext from "../context/cartContext";
import AuthContext from "../context/authContext";
import {
  Container,
  Title,
  Image,
  Price,
  Info,
  Button,
  ImageContainer,
  ProductDetail,
} from "../styled-components/ProductDetails";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  const productDetailUrl = `/shop/product/${params.id}`;
  const { addToCart, cartItems } = useContext(CartContext);
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get(productDetailUrl, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        setProduct(response.data);
      });
  }, []);

  console.log("authProdDetail", auth);

  return (
    <>
      <Navbar />
      <Container>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <ProductDetail>
          <Title>{product.name}</Title>
          <Info>{product.description}</Info>
          <Price>Price: ${product.price}</Price>
          <Button
            onClick={() => {
              // if auth object is empty
              if (Object.keys(auth).length === 0) {
                navigate("/login");
              } else {
                const itemToAdd = cartItems?.find(
                  (item) => item.id === product.id
                );
                if (itemToAdd) {
                  addToCart({
                    product,
                    quantity: itemToAdd?.cartItem?.quantity + 1,
                  });
                } else {
                  addToCart({ product, quantity: 1 });
                }
              }
            }}
          >
            Add to cart
          </Button>
        </ProductDetail>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetails;
