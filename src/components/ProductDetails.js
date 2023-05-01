import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CartContext from "../context/cartContext";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const productDetailUrl = `/shop/product/${params.id}`;
  const { addToCart, cartItems, cartTotalItems } = useContext(CartContext);
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

  return (
    <div>
      <Link to="/cart">Cart({cartTotalItems})</Link>
      <h1>{product.name}</h1>
      <span>{product.price}</span> <br />
      <img src={product.img} />
      <p>{product.description}</p>
      <button
        onClick={() => {
          const itemToAdd = cartItems?.find((item) => item.id === product.id);
          if (itemToAdd) {
            addToCart({
              product,
              quantity: itemToAdd?.cartItem?.quantity + 1,
            });
          } else {
            addToCart({ product, quantity: 1 });
          }
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetails;
