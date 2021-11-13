import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container-fluid px-0 mb-5 slider">
      <Carousel fade variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/k37ND5g/babyshoppers-brand-banner.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/LkpWdX7/diaper-main-banner.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/HqjzytZ/feeding-main-banner.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/zs1pm9W/main-banner-3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
