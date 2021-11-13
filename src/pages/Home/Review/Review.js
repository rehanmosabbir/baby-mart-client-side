import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import "./Review.css";

const Review = ({ review }) => {
  const { name, photoURL, description, rating } = review;
  return (
    <Col>
      <Card border="secondary" text="dark">
        <Card.Header className="bg-secondary text-white">
          <img
            className="img-fluid"
            src={
              photoURL
                ? photoURL
                : "https://cdn.iconscout.com/icon/free/png-256/boy-avatar-4-1129037.png"
            }
            alt=""
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
          />
          <Card.Title className="d-inline mx-3 pb-3">{name}</Card.Title>
        </Card.Header>

        <Card.Body>
          <Card.Text className="border-bottom pb-3">{description}</Card.Text>
          <Rating
            emptySymbol="far fa-star icon"
            fullSymbol="fas fa-star icon"
            initialRating={rating}
            readonly
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Review;
