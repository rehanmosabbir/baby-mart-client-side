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
      <div className="row row-cols-1 row-cols-md-4 g-4 my-5 bg-secondary">
        <div className="col">
          <div className="card  mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-body text-secondary d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                className="fs-1 me-3 text-danger"
                icon={faTruck}
              />
              <div>
                <h4 className="card-text text-dark">FREE SHIPPING</h4>
                <h6 className="card-title">On order over ৳4999</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-body text-secondary d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                className="fs-1 me-3 text-danger"
                icon={faClock}
              />
              <div>
                <h4 className="card-text text-dark">10-DAY RETURN</h4>
                <h6 className="card-title">Moneyback guarantee</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-body text-secondary d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                className="fs-1 me-3 text-danger"
                icon={faHeadset}
              />
              <div>
                <h4 className="card-text text-dark">24/7 SUPPORT</h4>
                <h6 className="card-title">Online consultations</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card  mb-3" style={{ maxWidth: "18rem" }}>
            <div className="card-body text-secondary d-flex justify-content-center align-items-center">
              <FontAwesomeIcon
                className="fs-1 me-3 text-danger"
                icon={faUmbrella}
              />
              <div>
                <h4 className="card-text text-dark">SAFE SHOPPING</h4>
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
