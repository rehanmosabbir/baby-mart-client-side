import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container-fluid px-0 mb-5 slider">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Sxv7yBG/1200px-Nafa-Khum-Thanchi-Bandarban.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-danger">Nafakhum Tour Package</h2>
            <p>
              Nafa-khum is a waterfall in Bangladesh on the Remaikree River, a
              tributary of the Sangu River.It is among the largest waterfalls in
              the country by volume of water falling.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/cy2x14b/1200px-Saint-martin-s-island.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-danger">Saint-Martin Tour Package</h2>
            <p>
              Saint Martin is one of the few coral islands in the world. Saint
              martin island in Bangladesh is called the blue heaven. Find the
              best hotels in st. martin & complete tour packages.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/g6hWqz9/1200px-Sajek-Valley-Rangamati-3.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-danger">Sajek Valley Tour Package</h2>
            <p>
              Sajek valley is famous for its natural beauty. The valley is
              surrounded by mountains, dense forest, grasslands hilly tracks.
              Many small rivers flow through the mountains among which Kachalong
              and Machalong are notable.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/SXdcMSh/1200px-Sundarban-Tiger.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2 className="fw-bold text-danger">Sundarban Tour Package</h2>
            <p>
              Sundarbans is a mangrove area in the delta formed by the
              confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay
              of Bengal. It spans from the Hooghly River in India's state of
              West Bengal to the Baleswar River in Bangladesh's division of
              Khulna.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

// https://i.ibb.co/Sxv7yBG/1200px-Nafa-Khum-Thanchi-Bandarban.jpg
// https://i.ibb.co/cy2x14b/1200px-Saint-martin-s-island.jpg
// https://i.ibb.co/g6hWqz9/1200px-Sajek-Valley-Rangamati-3.jpg
// https://i.ibb.co/SXdcMSh/1200px-Sundarban-Tiger.jpg
