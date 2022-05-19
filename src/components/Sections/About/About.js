import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFileShield,
  faBuildingColumns,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import aboutImage from "../../../images/about.png";
import author from "../../../images/author.png";

const About = () => {
  return (
    <div className="flex items-center container mx-auto py-24">
      {/* about us image section  */}
      <div className="w-1/2 p-5">
        <img src={aboutImage} alt="" />
      </div>
      {/* about us content section  */}
      <div className="w-1/2 p-5">
        <div className="flex items-center text-primary font-bold uppercase">
          <p>About Us</p>
          <hr className="ml-3 border-[1px] border-primary w-8 " />
        </div>
        <h3 className="text-[35px] lg:text-[60px] font-bold">
          Get Best CCTV <br />
          Solutions For House
        </h3>
        <p>
          Bandwidth has historically been very unequally distributed
          worldwide,with increasing concentration in the digital age.
        </p>
        <div className="flex items-center gap-5 pt-10">
          <FontAwesomeIcon
            className="bg-primary text-white rounded-full p-5 text-2xl"
            icon={faFileShield}
          ></FontAwesomeIcon>
          <div>
            <h3 className="lg:text-[24px] text-[18px] font-bold">
              Private & Personal Security
            </h3>
            <p className="text-sm">
              We believe the value that our functions add to a business.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 pt-5 pb-10">
          <FontAwesomeIcon
            className="bg-primary text-white rounded-full p-5 text-2xl"
            icon={faBuildingColumns}
          ></FontAwesomeIcon>
          <div>
            <h3 className="lg:text-[24px] text-[18px] font-bold">
              Bank & Institutions Solution
            </h3>
            <p className="text-sm">
              We believe the value that our functions add to a business.
            </p>
          </div>
        </div>
        <div className="flex gap-6">
          <button class="font-bold border px-5 my-2">
            Learn More
            <FontAwesomeIcon
              className="pl-1"
              icon={faArrowRightLong}
            ></FontAwesomeIcon>
          </button>
          <div className="flex gap-3 items-center">
            <img src={author} alt="" />
            <div>
              <h5 className="font-bold">Salim Rana</h5>
              <button className="text-primary">Head Of Idea</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
