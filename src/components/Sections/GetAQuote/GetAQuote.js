import {
  faArrowRightLong,
  faClock,
  faCalendar,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import IntroVideo from "../IntroVideo/IntroVideo";

const GetAQuote = () => {
  return (
    <div className="container mx-auto pt-20 bg-white  backface-hidden  mb-[-120px]">
      <div className="flex text-center justify-center items-center text-primary font-bold uppercase">
        <hr className="ml-3 border-[1px]  border-primary w-8 mr-3" />
        <p className="text-center">get a quote</p>
        <hr className="ml-3 border-[1px]  border-primary w-8 " />
      </div>
      <h3 className="text-[25px] md:text-[35px] text-center pb-3 lg:text-[60px] font-bold">
        Meet Our Best Program For
        <br /> Your Best Results
      </h3>
      <div className="shadow-lgx">
        <form className="p-5">
          <div className="md:flex justify-between p-5">
            <div className="md:w-2/3 grid gap-5 grid-cols-1 md:grid-cols-2">
              <select className="select select-bordered w-full  rounded-none">
                <option disabled selected>
                  CCTV Camera
                </option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <select className="select select-bordered w-full  rounded-none">
                <option>01</option>
                <option selected>02</option>
                <option>03</option>
              </select>
              <select className="select select-bordered w-full  rounded-none">
                <option disabled selected>
                  500TB
                </option>
                <option>1000TB</option>
                <option>2000TB</option>
              </select>
              <select className="select select-bordered w-full rounded-none">
                <option disabled selected>
                  4K Video Capture
                </option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="md:w-1/3 ">
              <button className="md:mx-5 mt-5 md:mt-0 btn btn-primary rounded-none text-[14px] capitalize w-full  text-white">
                Total: $18,000
              </button>
              <button
                type="submit"
                className="md:mx-5 mt-5 btn bg-black rounded-none text-[14px] text-white w-full capitalize"
              >
                Make Order Now
                <FontAwesomeIcon
                  className="pl-1"
                  icon={faArrowRightLong}
                ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </form>
        <h3 className="text-[17px] text-center py-10">
          To Buy <b>CCTV Camera</b> Just Click Start To Buy Button & Submit
          Required Details.
        </h3>
        <div className="bg-primary md:flex justify-between items-center py-10 md:py-3 px-5 gap-3">
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5 ">
            <FontAwesomeIcon
              className="bg-white text-secondary rounded-full p-3 text-xl"
              icon={faClock}
            ></FontAwesomeIcon>
            <div className="text-white text-center md:text-left pb-3 md:pb-0">
              <p className="text-[12px]">Free Quote</p>
              <h3 className="text-[14px] font-bold">Within 24/7 Hours</h3>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5 ">
            <FontAwesomeIcon
              className="bg-white text-secondary rounded-full p-3 text-xl"
              icon={faCalendar}
            ></FontAwesomeIcon>
            <div className="text-white text-center md:text-left pb-3 md:pb-0">
              <p className="text-[12px]">Same Day </p>
              <h3 className="text-[14px] font-bold">Service Available</h3>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5 ">
            <FontAwesomeIcon
              className="bg-white text-secondary rounded-full p-3 text-xl"
              icon={faEnvelope}
            ></FontAwesomeIcon>
            <div className="text-white text-center md:text-left pb-3 md:pb-0">
              <p className="text-[12px]">Support Email </p>
              <h3 className="text-[14px] font-bold">info@webmail.com</h3>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5">
            <FontAwesomeIcon
              className="bg-white text-secondary rounded-full p-3 text-xl"
              icon={faPhone}
            ></FontAwesomeIcon>
            <div className="text-white text-center md:text-left pb-3 md:pb-0">
              <p className="text-[12px]">Friendly Advice </p>
              <h3 className="text-[14px] font-bold">555 896 333 33</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetAQuote;
