import React from "react";
import faqImage from "../../../images/faq.png";
import "./Faq.css";

const Faq = () => {
  return (
    <div>
      <div className="md:flex items-center container mx-auto pt-20 pb-16">
        {/* faq image section  */}
        <div className="md:w-1/2 p-5">
          <img src={faqImage} alt="" />
        </div>
        {/* faq content section  */}
        <div className="md:w-1/2 p-5">
          <div className="flex items-center justify-center md:justify-start  text-primary font-bold uppercase">
            <p>FAQ</p>
            <hr className="ml-3 border-[1px] border-primary w-8 " />
          </div>
          <h3 className="text-[25px] md:text-[35px] lg:text-[60px] font-bold text-center md:text-left">
            Have To Protect <br />
            All Over The Globe.
          </h3>
          <div className="flex flex-wrap sm:mx-auto sm:mb-2 ">
            <div className="w-full lg:w-2/3 px-4 py-2">
              <details className="mb-4 shadow-lg">
                <summary className="font-semibold  bg-[#FAFAFA] p-4">
                  Coordinate movement with breath to flow?
                </summary>

                <span className="bg-white pl-2">
                  Our Fitness clubs offer a variety of yoga classes that range
                  from beginner to advanced. With Zimu access your favorite
                  class or test out a PURE Yoga class anytime, anywhere.
                </span>
              </details>
              <details className="mb-4 shadow-lg">
                <summary className="font-semibold  bg-[#FAFAFA] p-4">
                  Coordinate movement with breath to flow?
                </summary>

                <span className="bg-white pl-2">
                  Our Fitness clubs offer a variety of yoga classes that range
                  from beginner to advanced. With Zimu access your favorite
                  class or test out a PURE Yoga class anytime, anywhere.
                </span>
              </details>
              <details className="mb-4 shadow-lg">
                <summary className="font-semibold  bg-[#FAFAFA] p-4">
                  Coordinate movement with breath to flow?
                </summary>

                <span className="bg-white pl-2">
                  Our Fitness clubs offer a variety of yoga classes that range
                  from beginner to advanced. With Zimu access your favorite
                  class or test out a PURE Yoga class anytime, anywhere.
                </span>
              </details>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 container mx-auto " />
    </div>
  );
};

export default Faq;
