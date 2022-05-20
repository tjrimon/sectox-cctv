import React from "react";
import About from "../../Sections/About/About";
import Blog from "../../Sections/Blog/Blog";
import Faq from "../../Sections/Faq/Faq";
import Features from "../../Sections/Features/Features";
import GetAQuote from "../../Sections/GetAQuote/GetAQuote";
import IntroVideo from "../../Sections/IntroVideo/IntroVideo";
import Process from "../../Sections/Process/Process";
import Services from "../../Sections/Services/Services";
import Shop from "../../Sections/Shop/Shop";
import Slider from "../../Sections/Slider/Slider";

const Home = () => {
  return (
    <div className="scroll-smooth snap-y snap-mandatory">
      <Slider></Slider>
      <About></About>
      <Services></Services>
      <Features></Features>
      <Process></Process>
      <Shop></Shop>
      <Faq></Faq>
      <GetAQuote></GetAQuote>
      <IntroVideo></IntroVideo>
      <Blog></Blog>
    </div>
  );
};

export default Home;
