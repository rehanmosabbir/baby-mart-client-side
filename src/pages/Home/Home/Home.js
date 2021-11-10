import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";
import ShippingInfo from "../ShippingInfo/ShippingInfo";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Products></Products>
      <ShippingInfo></ShippingInfo>
      <Reviews></Reviews>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default Home;
