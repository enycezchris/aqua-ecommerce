import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Table,
  TableCell,
  TableTitle,
  TableRow,
  Image,
  TableBody,
  TableHeaders,
  Title,
  OrderTitle,
  EmptyOrderContainer,
  EmptyOrderTitle,
  EmptyOrderLink,
} from "../styled-components/Order";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const orderURL = "/shop/orders";
  const shipping = 7.99;
  const tax = 8.875 / 100;
  const navigate = useNavigate();
  let salesTax;
  let orderTotal;
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

  //   <Table>
  //   <TableBody>
  //     <TableRow>
  //       <TableHeaders>Product</TableHeaders>
  //       <TableHeaders>Price</TableHeaders>
  //       <TableHeaders>Quantity</TableHeaders>
  //     </TableRow>
  //     <TableRow>
  //       <TableCell>
  //         <Image src="https://www.akc.org/wp-content/uploads/2017/11/Samoyed-MP.jpg" />
  //       </TableCell>
  //       <TableCell>$1.00</TableCell>
  //       <TableCell>2</TableCell>
  //     </TableRow>
  //     <TableRow>
  //       <TableCell></TableCell>
  //       <TableCell>Subtotal</TableCell>
  //       <TableCell>$100.00</TableCell>
  //     </TableRow>
  //   </TableBody>
  // </Table>

  return (
    <>
      <Navbar />
      <Container>
        {orders?.length > 0 ? (
          <>
            <OrderTitle>Recent Orders ({orders.length})</OrderTitle>
            {orders?.map((order) => {
              // Getting the total price of each order from order.products Array
              orderTotal = order.products.reduce(
                (acc, product) =>
                  acc + product.price * product.orderItem.quantity,
                0
              );
              return (
                <Table>
                  <TableTitle>
                    <Title type="title">Order Number:</Title>
                    <Title>{order.id}</Title>
                  </TableTitle>
                  <TableBody>
                    <TableRow>
                      <TableHeaders>Products</TableHeaders>
                      <TableHeaders>Price</TableHeaders>
                      <TableHeaders>Quantity</TableHeaders>
                      <TableHeaders>Total</TableHeaders>
                    </TableRow>
                    {order.products.map((product) => {
                      salesTax = orderTotal * tax;
                      console.log("salesTax", salesTax);
                      return (
                        <TableRow>
                          <TableCell>
                            <Image
                              src={product.img}
                              onClick={() => {
                                navigate(`/product/${product.id}`);
                              }}
                            />
                          </TableCell>
                          <TableCell>${product.price}</TableCell>
                          <TableCell>{product.orderItem.quantity}</TableCell>
                          <TableCell>
                            ${product.price * product.orderItem.quantity}
                          </TableCell>
                        </TableRow>
                      );
                    })}
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell type="shipping">Shipping:</TableCell>
                      <TableCell type="shipping">${shipping}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell type="tax">Tax:</TableCell>
                      <TableCell type="tax">${salesTax.toFixed(2)}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell type="total">Subtotal:</TableCell>
                      <TableCell type="total">
                        ${(orderTotal + shipping + salesTax).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              );
            })}
          </>
        ) : (
          <>
            <EmptyOrderContainer>
              <EmptyOrderTitle type="title">
                You don't currently have any recent orders!
              </EmptyOrderTitle>
              <EmptyOrderLink to="/products">Browse Products</EmptyOrderLink>
            </EmptyOrderContainer>
          </>
        )}
      </Container>
      <Footer />
      {/* {orders?.length > 0 ? (
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
      )} */}
    </>
  );
};

export default Order;
