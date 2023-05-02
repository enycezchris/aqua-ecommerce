import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const stripePromise = loadStripe(
    "pk_test_51N2i1IJd57tN2Vqgrlzc1qnttwixuUEubzzxMTk33WdR3eI4em7h5Qi5O6ApLjTFFfPFQCUKmvSHjPi4zSnDx3Fy0012B6LGRx"
  );
  const cartURL = "/shop/cart";
  const checkoutURL = "/shop/checkout";
  const orderUrl = "/shop/order";
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const cartTotalItems = cartItems?.reduce(
    (acc, item) => acc + item.cartItem.quantity,
    0
  );

  useEffect(() => {
    axios
      .get(cartURL, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        setCartItems(response.data);
      });
  }, []);

  const addToCart = async ({ product, quantity }) => {
    axios.put(cartURL, { product, quantity });
    setCartItems((prev) => {
      // find the product in cart
      const itemExists = prev?.find((item) => item.id === product.id);
      if (itemExists) {
        // if the product exists in cart, set the quantity to the quantity entered
        itemExists.cartItem.quantity = quantity;
        // return the copy of previous state cause arrays are reference data type
        return [...prev];
      } else {
        // if the product doesnt exist in cart set the product object with cartItem with quantity to the quantity entered (1) if the product doesn't exist
        const productWithQuantity = (product["cartItem"] = {
          quantity: quantity,
        });
        // add the productWithQuantity object into the product object
        Object.assign(product, productWithQuantity);
        const newCartItem = [...prev, { ...product }];
        // return the newCartItem with the previous state (empty array) add the product into the newCartItem Array
        console.log("newCartItem", newCartItem);
        return newCartItem;
      }
    });
    navigate(0);
  };

  const handleOrderButton = async ({ cartItems, orderTotal }) => {
    const stripe = await stripePromise;
    axios.post(checkoutURL, { cartItems, orderTotal }).then((response) => {
      stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      });
      axios.post(orderUrl, { cartItems, orderTotal });
      setCartItems([]);
    });
  };

  const updateQuantity = async ({ product, quantity }) => {
    axios.put(cartURL, { product, quantity });

    setCartItems((prev) => {
      const newItemsArr = [...prev];
      const itemToUpdate = newItemsArr?.find(
        (prevItem) => prevItem.id === product.id
      );
      itemToUpdate.cartItem.quantity = quantity;
      //   filter the prev(cartItem Array) where the cartItem.quantity greater than 0
      const itemsWithQuantities = newItemsArr?.filter(
        (prevItem) => prevItem?.cartItem?.quantity > 0
      );
      if (itemToUpdate.cartItem.quantity < 1) {
        return [...itemsWithQuantities];
      }
      return newItemsArr;
    });
  };

  const removeFromCart = async ({ product }) => {
    // delete route req.body is undefined unless you pass in data as second paramenter { data: {product: item}}
    axios.delete(cartURL, { data: { product: product } });
    // setting the newCartItem state by filtering the cartItems with the id not equal to the deleted Item's id
    setCartItems((prev) => {
      const itemToDelete = prev.filter(
        (cartItem) => cartItem.id !== product.id
      );
      console.log("itemToDelete", [...itemToDelete]);
      return [...itemToDelete];
    });
    navigate(0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        removeFromCart,
        updateQuantity,
        addToCart,
        handleOrderButton,
        cartTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
