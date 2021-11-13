import React from "react";
import { Card, Col } from "react-bootstrap";

const Review = ({ review }) => {
  const { name, photoURL, description, rating } = review;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={photoURL} />
        <Card.Body>
          <Card.Title className="border-bottom pb-3">{name}</Card.Title>
          <Card.Text className="border-bottom pb-3">{description}</Card.Text>
          <small className="text-danger  mx-4">{rating}</small>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
