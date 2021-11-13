import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import SingleManageProduct from "../SingleManageProduct/SingleManageProduct";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://shrouded-reaches-47606.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteOrder = (id) => {
    const url = `https://shrouded-reaches-47606.herokuapp.com/products/${id}`;

    if (window.confirm("Are you sure to delete this order?")) {
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Product deleted successfully");
            const remainingProducts = products.filter(
              (product) => product._id !== id
            );
            setProducts(remainingProducts);
          }
        });
    }
  };

  return (
    <Container>
      <h1 className="text-dark fw-bold text-center mt-5 mb-4">
        Manage Products
      </h1>
      <hr className="w-50 m-auto mb-5" />
      <Row xs={1} md={3} className="g-4">
        {products.map((product) => (
          <SingleManageProduct
            handleDeleteOrder={handleDeleteOrder}
            product={product}
            key={product._id}
          ></SingleManageProduct>
        ))}
      </Row>
    </Container>
  );
};

export default ManageProducts;
