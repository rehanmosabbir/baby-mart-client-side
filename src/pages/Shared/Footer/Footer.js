import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneVolume,
  faClock,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-secondary text-white pt-5 mt-5 text-center">
      <div className="row">
        <div className="col-md-3 col-sm-12 my-3 border-bottom  pb-5">
          <h4 className="mb-3">
            <FontAwesomeIcon
              className="me-2 text-danger"
              icon={faMapMarkerAlt}
            />
            Address
          </h4>
          <p className="mb-0">18/F, Bir Uttam</p>
          <p className="mb-0">Qazi Nuruzzaman Sarak ,</p>
          <p>West Panthapath , Dhaka - 1205</p>
        </div>
        <div className="col-md-3 col-sm-12 my-3 border-bottom  pb-5">
          <h4 className="mb-3">
            <FontAwesomeIcon
              className="me-2 text-danger"
              icon={faPhoneVolume}
            />
            Contact Us
          </h4>
          <p className="mb-0">01972 277 866</p>
          <p>016 30 31 30 31</p>
          <p>info@tourplannerbd.com</p>
        </div>
        <div className="col-md-3 col-sm-12 my-3 border-bottom  pb-5">
          <h4 className="mb-3">
            <FontAwesomeIcon className="me-2 text-danger" icon={faClock} />
            Opening Hours
          </h4>
          <p>Mon - Sat: 10am - 11pm</p>
          <p>Sunday: Closed</p>
        </div>
        <div className="col-md-3 col-sm-12 my-3 border-bottom  pb-5">
          <h4 className="mb-3">
            <FontAwesomeIcon className="me-2 text-danger" icon={faMailBulk} />
            Keep in touch
          </h4>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Subscribe"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-danger btn-sm"
              type="button"
              id="button-addon2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-white py-4 m-0 text-wrap">
        © 2021 Tour Planner BD - All rights reserved
      </p>
    </div>
  );
};

export default Footer;
