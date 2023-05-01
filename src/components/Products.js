import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import CartContext from "../context/cartContext";

const Products = () => {
  const productsURL = "/shop/products";
  const [products, setProducts] = useState([]);
  const [productsTotal, setProductsTotal] = useState(0);
  // uses the useSearchParams hooks from react-router v6
  const [searchParams, setSearchParams] = useSearchParams();
  // search the term "page" from the url query params ("/?page=")
  const page = searchParams.get("page");
  const totalPages = Math.ceil(productsTotal / products.length);
  const { cartItems, addToCart, cartTotalItems } = useContext(CartContext);

  const createPaginationPages = () => {
    const numOfPages = [];
    for (let i = 1; i <= totalPages; i++) {
      console.log("i", i);
      numOfPages.push(
        <Link style={{ padding: "5px" }} key={i} to={`/products?page=${i}`}>
          {i}
        </Link>
      );
    }
    return numOfPages;
  };

  useEffect(() => {
    axios
      .get(productsURL, {
        params: {
          page: page,
        },
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        setProducts(response.data.rows);
        setProductsTotal(response.data.count);
      });
  }, [page]);

  return (
    <div>
      <Link to="/cart">Cart({cartTotalItems})</Link>
      {(products || []).map((product) => {
        return (
          <ul key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img
                style={{ width: "250px", height: "250px" }}
                src={product.img}
              />
            </Link>
            <li>{product.name}</li>
            <li>${product.price}</li>
            <li>{product.description}</li>
            <button
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
            >
              Add to cart
            </button>
          </ul>
        );
      })}
      <section style={{ padding: "30px", textAlign: "center" }}>
        {createPaginationPages()}
      </section>
    </div>
  );
};

export default Products;
