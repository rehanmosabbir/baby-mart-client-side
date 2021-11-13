import React from "react";
import { Card, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const SingleManageProduct = ({ product, handleDeleteOrder }) => {
  const { img, price, productName, description, _id } = product;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="border-bottom pb-3">{productName}</Card.Title>
          <Card.Text className="border-bottom pb-3">
            {description.slice(0, 200)}...
          </Card.Text>
          <small className="text-danger  mx-4">$ {price}</small>
          <button
            onClick={() => handleDeleteOrder(_id)}
            className="btn btn-danger btn-delete"
          >
            <div className="d-flex justify-content-center align-items-center">
              <small className="me-2">Delete</small>
              <FontAwesomeIcon className="text-white" icon={faTrashAlt} />
            </div>
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleManageProduct;
