import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faUmbrella,
  faHeadset,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const ShippingInfo = () => {
  return (
    <div className="container-fluid">
      <h1 className="text-danger fw-bold text-center mt-5 mb-4">
        Our Happy Clients
      </h1>
      <hr className="w-50 m-auto mb-5" />
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
        <div className="col">
          <div
            className="card border-success mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body text-success d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="fs-1 me-3" icon={faTruck} />
              <div>
                <h4 className="card-text">FREE SHIPPING</h4>
                <h6 className="card-title">On order over ৳4999</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card border-success mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body text-success d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="fs-1 me-3" icon={faClock} />
              <div>
                <h4 className="card-text">10-DAY RETURN</h4>
                <h6 className="card-title">Moneyback guarantee</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card border-success mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body text-success d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="fs-1 me-3" icon={faHeadset} />
              <div>
                <h4 className="card-text">24/7 SUPPORT</h4>
                <h6 className="card-title">Online consultations</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className="card border-success mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body text-success d-flex justify-content-center align-items-center">
              <FontAwesomeIcon className="fs-1 me-3" icon={faUmbrella} />
              <div>
                <h4 className="card-text">SAFE SHOPPING</h4>
                <h6 className="card-title">Safe Shopping Guarantee</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
