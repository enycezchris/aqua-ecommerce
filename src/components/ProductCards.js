import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/cartContext";

const ProductCards = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  return (
    <ul key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img style={{ width: "250px", height: "250px" }} src={product.img} />
      </Link>
      <li>{product.name}</li>
      <li>${product.price}</li>
      <li>{product.description}</li>
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
    </ul>
  );
};

export default ProductCards;
