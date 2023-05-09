import React from "react";
import { useContext } from "react";
import CartContext from "../context/cartContext";
import {
  Container,
  Wrapper,
  TopContainer,
  CartInfoContainer,
  BottomContainer,
  CartSummary,
  Title,
  Button,
  MyCartInfo,
  ProductInfo,
  ProductImage,
  ProductContainer,
  ProductName,
  ProductPrice,
  ProductDetails,
  Details,
  ProductPriceQuantityContainer,
  ProductQuantity,
  AddIcon,
  RemoveIcon,
  Summary,
  SummaryInfo,
  SummaryTotal,
  SummaryPrice,
  SummaryTitle,
  SummaryShipping,
  ShippingAmount,
  SummaryTax,
  TaxAmount,
  SummaryButton,
  Price,
  Quantity,
  EmptyCartContainer,
  EmptyCart,
  Link,
  ImageLink,
  Delete,
} from "../styled-components/Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Cart(stripePromise) {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    handleOrderButton,
    cartTotalItems,
  } = useContext(CartContext);

  const currentCartItems = cartItems?.map((cartItem) => {
    return cartItem;
  });

  const currentCartTotalPrice = currentCartItems.reduce(
    (acc, item) => acc + item.cartItem.quantity * item.price.toFixed(2),
    0
  );

  const tax = currentCartTotalPrice * 0.0875;

  const shipping = 7.99;

  const getSubtotal = (currentCartPrice, shipping, tax) => {
    return (Number(currentCartPrice) + Number(shipping) + Number(tax)).toFixed(
      2
    );
  };

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Container>
        {cartItems.length > 0 ? (
          <Wrapper>
            <Title>Shopping Cart</Title>
            <TopContainer>
              <Button
                onClick={() => {
                  navigate("/products");
                }}
              >
                Continue Shopping
              </Button>
              <CartInfoContainer>
                <MyCartInfo>Your Cart ({cartTotalItems})</MyCartInfo>
              </CartInfoContainer>
              <Button
                onClick={() =>
                  handleOrderButton({
                    cartItems: cartItems,
                    orderTotal: currentCartTotalPrice.toFixed(2),
                  })
                }
              >
                Checkout Now
              </Button>
            </TopContainer>
            <BottomContainer>
              <ProductContainer>
                {cartItems?.map((product) => {
                  return (
                    <ProductInfo key={product.id}>
                      <ProductDetails>
                        <ImageLink to={`/product/${product.id}`}>
                          <ProductImage src={product.img} />
                        </ImageLink>
                        <Details>
                          <ProductName>{product.name}</ProductName>
                        </Details>
                      </ProductDetails>
                      <ProductPriceQuantityContainer>
                        <ProductPrice>
                          <Price type="price">Price</Price>
                          <Price>${product.price.toFixed(2)}</Price>
                        </ProductPrice>
                        <ProductQuantity type="qty-div">
                          <Quantity type="qty">Qty</Quantity>
                          <ProductQuantity>
                            <RemoveIcon
                              onClick={() => {
                                updateQuantity({
                                  product: product,
                                  quantity: product?.cartItem?.quantity - 1,
                                });
                              }}
                            />
                            <Quantity>{product.cartItem.quantity}</Quantity>
                            <AddIcon
                              onClick={() => {
                                updateQuantity({
                                  product: product,
                                  quantity: product?.cartItem?.quantity + 1,
                                });
                              }}
                            />
                          </ProductQuantity>
                          <Delete
                            onClick={() => {
                              removeFromCart({ product });
                            }}
                          />
                        </ProductQuantity>
                      </ProductPriceQuantityContainer>
                    </ProductInfo>
                  );
                })}
              </ProductContainer>
              <CartSummary>
                <Summary>
                  <SummaryTitle>Order Summary</SummaryTitle>
                  <SummaryInfo>
                    <SummaryShipping>Shipping:</SummaryShipping>
                    <ShippingAmount>${shipping}</ShippingAmount>
                  </SummaryInfo>
                  <SummaryInfo>
                    <SummaryTax>Sales Tax:</SummaryTax>
                    <TaxAmount>${tax.toFixed(2)}</TaxAmount>
                  </SummaryInfo>
                  <SummaryInfo type="order-total">
                    <SummaryTotal>Order Total:</SummaryTotal>
                    <SummaryPrice>
                      ${currentCartTotalPrice.toFixed(2)}
                    </SummaryPrice>
                  </SummaryInfo>
                  <SummaryInfo type="order-subtotal">
                    <SummaryTotal>Subtotal:</SummaryTotal>
                    <SummaryPrice>
                      ${getSubtotal(currentCartTotalPrice, shipping, tax)}
                    </SummaryPrice>
                  </SummaryInfo>
                  <SummaryButton
                    onClick={() =>
                      handleOrderButton({
                        cartItems: cartItems,
                        orderTotal: currentCartTotalPrice.toFixed(2),
                      })
                    }
                  >
                    Place Order
                  </SummaryButton>
                </Summary>
              </CartSummary>
            </BottomContainer>
          </Wrapper>
        ) : (
          <EmptyCartContainer>
            <EmptyCart type="title">
              You don't currently have any items in cart!
            </EmptyCart>
            <EmptyCart>
              <Link type="empty" to="/products">
                Browse Products
              </Link>
            </EmptyCart>
          </EmptyCartContainer>
        )}
      </Container>
      {/* {cartItems?.length > 0 ? (
        <Container>
          <Wrapper>
            <h1>{cartTotalItems} items in cart</h1>
            {cartItems?.map((product) => {
              return (
                <ul key={product.id}>
                  <img
                    src={product.img}
                    style={{ width: "125px", height: "125px" }}
                  />
                  <li>{product.name}</li>
                  <li>
                    Quantity:
                    {product?.cartItem?.quantity
                      ? product.cartItem.quantity
                      : product.quantity}
                  </li>
                  <button
                    onClick={() => {
                      updateQuantity({
                        product: product,
                        quantity: product?.cartItem?.quantity - 1,
                      });
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      removeFromCart({ product });
                    }}
                  >
                    x
                  </button>
                  <button
                    onClick={() => {
                      updateQuantity({
                        product: product,
                        quantity: product?.cartItem?.quantity + 1,
                      });
                    }}
                  >
                    +
                  </button>
                </ul>
              );
            })}
            <button
              onClick={() =>
                handleOrderButton({
                  cartItems: cartItems,
                  orderTotal: currentCartTotalPrice.toFixed(2),
                })
              }
              style={{ padding: "20px" }}
            >
              Checkout
            </button>
          </Wrapper>
        </Container>
      ) : (
        <>
          <h1>No Items in cart!</h1>
        </>
      )} */}
      <Footer />
    </>
  );
}

export default Cart;
