import React from "react";
import About from "../../Sections/About/About";
import Faq from "../../Sections/Faq/Faq";
import Features from "../../Sections/Features/Features";
import GetAQuote from "../../Sections/GetAQuote/GetAQuote";
import Process from "../../Sections/Process/Process";
import Services from "../../Sections/Services/Services";
import Shop from "../../Sections/Shop/Shop";
import Slider from "../../Sections/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <Services></Services>
      <Features></Features>
      <Process></Process>
      <Shop></Shop>
      <Faq></Faq>
      <GetAQuote></GetAQuote>
    </div>
  );
};

export default Home;
