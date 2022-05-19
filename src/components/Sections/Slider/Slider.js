import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import sliderImage from "../../../images/home-bg.png";

const Slider = () => {
  return (
    <div>
      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <img src={sliderImage} class="w-full" />
          <div class="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" class="btn text-[30px] border-none">
              <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
            </a>
            <div className="text-center">
              <p className="font-bold text-white uppercase">
                Best cctv solution in us
              </p>
              <h3 className="font-bold text-white text-[50px] lg:text-[80px]">
                Secure Your Family
                <br />
                From All Issues
              </h3>
              <div className="flex justify-center items-center gap-5">
                <button class="btn rounded-none text-[14px] hover:text-white text-secondary hover:border-white border-white hover:bg-transparent bg-white">
                  Our Service
                </button>
                <button class="btn btn-primary rounded-none text-[14px] text-white">
                  Get In Touch
                </button>
              </div>
            </div>
            <a href="#slide2" class="btn text-[30px] border-none">
              <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
            </a>
          </div>
        </div>
        <div id="slide2" class="carousel-item relative w-full">
          <img src={sliderImage} class="w-full" />
          <div class="absolute flex justify-between items-center transform -translate-y-1/2 left-0 right-0 top-1/2 px-10">
            <a href="#slide1" class="btn text-[30px] border-none">
              <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
            </a>
            <div className="text-center">
              <p className="font-bold text-white uppercase">
                Best cctv solution in us
              </p>
              <h3 className="font-bold text-white text-[50px] lg:text-[80px]">
                Secure Your Family
                <br />
                From All Issues
              </h3>
              <div className="flex justify-center items-center gap-5">
                <button class="btn rounded-none text-[14px] hover:text-white text-secondary hover:border-white border-white hover:bg-transparent bg-white">
                  Our Service
                </button>
                <button class="btn btn-primary rounded-none text-[14px] text-white">
                  Get In Touch
                </button>
              </div>
            </div>
            <a href="#slide1" class="btn text-[30px] border-none">
              <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
