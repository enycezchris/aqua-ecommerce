import React, { useContext } from "react";
import CartContext from "../context/cartContext";
import {
  Container,
  Image,
  IconContainer,
  Icons,
  Detail,
  ShopIcon,
} from "../styled-components/ProductCards";
import { useNavigate } from "react-router-dom";

const ProductCards = ({ product }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <Container>
      <Image src={product.img} />
      <IconContainer>
        <Icons>
          <ShopIcon
            onClick={() => {
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
    </Container>
  );
};

export default ProductCards;
