import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductCards from "./ProductCards";
import {
  Container,
  Section,
  Link,
  ProductsContainer,
} from "../styled-components/Products";

const Products = () => {
  const productsURL = "/shop/products";
  const [products, setProducts] = useState([]);
  const [productsTotal, setProductsTotal] = useState(0);
  // uses the useSearchParams hooks from react-router v6
  const [searchParams, setSearchParams] = useSearchParams();
  // search the term "page" from the url query params ("/?page=")
  const page = searchParams.get("page");
  const totalPages = Math.ceil(productsTotal / products.length);
  const createPaginationPages = () => {
    const numOfPages = [];
    for (let i = 1; i <= totalPages; i++) {
      numOfPages.push(
        <Link key={i} to={`/products?page=${i}`}>
          {i}
        </Link>
      );
    }
    return numOfPages;
  };

  console.log("productsLength: ", products.length);
  console.log("productsTotal: ", productsTotal);

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
    <ProductsContainer>
      <Navbar />
      <Container>
        {(products || []).map((product) => {
          return <ProductCards key={product.id} product={product} />;
        })}
      </Container>
      <Section>{createPaginationPages()}</Section>
      <Footer />
    </ProductsContainer>
  );
};

export default Products;
