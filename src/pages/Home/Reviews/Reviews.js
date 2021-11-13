import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://shrouded-reaches-47606.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <Container>
      <h1 className="text-dark fw-bold text-center mt-5 mb-4">
        Our Client Reviews
      </h1>
      <hr className="w-50 m-auto mb-5" />
      <Row xs={1} md={3} className="g-4">
        {reviews.map((review) => (
          <Review review={review} key={review._id}></Review>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
