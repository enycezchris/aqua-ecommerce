import React, { useState, useEffect } from "react";
import axios from "axios";

const Order = () => {
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

  console.log("orders", orders);

  return (
    <>
      {orders?.length > 0 ? (
        <>
          {orders?.map((order) => {
            return (
              <>
                <h3>Order number: {order.id}</h3>
                {order.products.map((product) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={product.img}
                        style={{
                          width: "100px",
                          height: "100px",
                          marginTop: "30px",
                        }}
                      />
                      <p style={{ marginTop: "30px" }}>{product.name}</p>
                      <p style={{ marginTop: "30px" }}>
                        {product.orderItem.quantity}
                      </p>
                    </div>
                  );
                })}
              </>
            );
          })}
        </>
      ) : (
        <>
          <h1>No orders to display!</h1>
        </>
      )}
    </>
  );
};

export default Order;
