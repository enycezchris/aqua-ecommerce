import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import {
  Container,
  Image,
  IconContainer,
  Icons,
  Detail,
  ShopIcon,
  Info,
} from "../styled-components/ProductCards";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";

const ProductCards = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Container>
      <Image src={product.img} />
      <IconContainer>
        <Icons>
          <ShopIcon
            onClick={() => {
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
          />
        </Icons>
        <Icons>
          <Detail
            onClick={() => {
              navigate(`/product/${product.id}`);
            }}
          />
        </Icons>
      </IconContainer>
      <Info>Price: ${product.price}</Info>
    </Container>
  );
};

export default ProductCards;
