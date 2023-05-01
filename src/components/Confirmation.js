import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Confirmation = () => {
  const [orders, setOrders] = useState([]);
  const orderURL = "/shop/orders";
  useEffect(() => {
    axios
      .get(orderURL, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        console.log("response", response.data);
        setOrders(response.data);
      });
  }, []);

  //   get the latest order. if length is greater than 1 then latest order is orders state -1, if order is not greater than 1 then latest order is the first element in state orders array
  const latestOrder = orders.length > 1 ? orders[orders.length - 1] : orders[0];

  //   get the products from the latestOrder
  const latestOrderProducts = latestOrder?.products?.map((product) => product);

  //   get the total order price by multiplying product quantity by price of all products in latest order
  const latestOrderTotal = latestOrderProducts?.reduce(
    (acc, product) => acc + product.orderItem.quantity * product.price,
    0
  );

  return (
    <div>
      <h1>Order Confirmation</h1>
      <p>Thank you for your order!</p>
      <span>Order Number: {latestOrder?.id}</span>
      {latestOrder?.products?.map((product) => {
        return (
          <ul key={product.id}>
            <img
              style={{ width: "125px", height: "125px" }}
              src={product.img}
            />
            <li>{product.name}</li>
            {/* toFixed(2) => js method to set decimal to 2 places */}
            <li>${product.price?.toFixed(2)}</li>
            <li>{product.orderItem.quantity}</li>
            <li>
              Total: ${(product.price * product.orderItem.quantity).toFixed(2)}
            </li>
          </ul>
        );
      })}
      <h4>Order Total: ${latestOrderTotal?.toFixed(2)}</h4>
      <Link to="/order">Click here to view your orders</Link>
    </div>
  );
};

export default Confirmation;
