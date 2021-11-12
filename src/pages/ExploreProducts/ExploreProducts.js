import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Home/Product/Product";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <h1 className="text-danger fw-bold text-center mt-5 mb-4">
          Our Products
        </h1>
        <hr className="w-50 m-auto mb-5" />
        <Row xs={1} md={3} className="g-4">
          {products.map((product) => (
            <Product product={product} key={product._id}></Product>
          ))}
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Products;
