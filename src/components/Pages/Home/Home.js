import React from "react";
import About from "../../Sections/About/About";
import Features from "../../Sections/Features/Features";
import Services from "../../Sections/Services/Services";
import Slider from "../../Sections/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Services></Services>
      <Features></Features>
    </div>
  );
};

export default Home;
