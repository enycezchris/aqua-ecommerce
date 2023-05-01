import React from "react";
import { useContext } from "react";
import CartContext from "../context/cartContext";

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
    (acc, item) => acc + item.cartItem.quantity * item.price,
    0
  );

  console.log("currentCartItems", currentCartItems);

  console.log("currentTotalPrice", currentCartTotalPrice.toFixed(2));

  console.log("stripePromise", stripePromise);
  return (
    <>
      {cartItems?.length > 0 ? (
        <>
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
        </>
      ) : (
        <>
          <h1>No Items in cart!</h1>
        </>
      )}
    </>
  );
}

export default Cart;
