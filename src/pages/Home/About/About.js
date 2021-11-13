import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1 className="text-dark fw-bold text-center mt-5 mb-4">About us</h1>
      <hr className="w-50 m-auto mb-5" />
      <div className="row">
        <div className="col-md-6 col-12">
          <p>
            In the busy and bustling city of Dhaka how hard is it really to go
            out in emergencies and shop? Especially when it comes to babies,
            needs can and do arise spontaneously and to meet those needs the
            city does not yet have as many large stores in every corner. Here at
            Baby Shoppers we believe your children are precious and so are you,
            and in times of emergencies and rush, we wish to be where you look
            to for a solution.
          </p>
          <p>
            Baby shoppers aspires to be the largest online based store for all
            things baby related in Bangladesh, like a one stop baby shop for
            your little one with not one but numerous brands in a variety of
            ranges.Our main goal here at Baby Shoppers is to make life a tad bit
            easier and more comfortable for mothers across the country and of
            course for the children.
          </p>
        </div>
        <div className="col-md-6 col-12">
          <img
            className="img-fluid"
            src="https://i.ibb.co/qJKMxvK/4411726-AMZ-hatscare.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
