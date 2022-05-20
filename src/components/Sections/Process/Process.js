import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faVideo,
  faEarthAmerica,
  faHatCowboy,
  faComputer,
  faPlaneCircleCheck,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Process = () => {
  return (
    <div className="py-20 container mx-auto">
      <div className="flex text-center justify-center items-center text-primary font-bold uppercase">
        <hr className="ml-3 border-[1px]  border-primary w-8 mr-3" />
        <p className="text-center">Process</p>
        <hr className="ml-3 border-[1px]  border-primary w-8 " />
      </div>
      <h3 className="text-[35px] text-center pb-3 lg:text-[60px] font-bold">
        How We Work Here
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <div className="font-bold py-10 w-48 bg-white shadow-lg text-center">
          <h3 className="text-[100px] text-gray-300">01</h3>
          <h3 className="text-[18px]">Drone CCTV Discussion</h3>
          <FontAwesomeIcon
            className="text-5xl text-primary pt-2"
            icon={faCloud}
          />
        </div>
        <div className="font-bold py-10 w-48 bg-white shadow-lg text-center">
          <h3 className="text-[100px] text-gray-300">02</h3>
          <h3 className="text-[18px]">Live Footage Collection</h3>
          <FontAwesomeIcon
            className="text-5xl text-primary pt-2"
            icon={faVideo}
          />
        </div>
        <div className="font-bold py-10 w-48 bg-white shadow-lg text-center">
          <h3 className="text-[100px] text-gray-300">03</h3>
          <h3 className="text-[18px]">Monitor From Anywhere</h3>
          <FontAwesomeIcon
            className="text-5xl text-primary pt-2"
            icon={faEarthAmerica}
          />
        </div>
        <div className="font-bold py-10 w-48 bg-white shadow-lg text-center">
          <h3 className="text-[100px] text-gray-300">04</h3>
          <h3 className="text-[18px]">Hacker & Custom Solution</h3>
          <FontAwesomeIcon
            className="text-5xl text-primary pt-2"
            icon={faHatCowboy}
          />
        </div>
        <div className="font-bold py-10 w-48 bg-white shadow-lg text-center">
          <h3 className="text-[100px] text-gray-300">05</h3>
          <h3 className="text-[18px]">
            Desk & HDD <br />
            Solution
          </h3>
          <FontAwesomeIcon
            className="text-5xl text-primary pt-2"
            icon={faComputer}
          />
        </div>
        <div className="font-bold py-10 w-48 bg-white shadow-lg text-center">
          <h3 className="text-[100px] text-gray-300">06</h3>
          <h3 className="text-[18px]">
            Flight Mode <br /> Activated
          </h3>
          <FontAwesomeIcon
            className="text-5xl text-primary pt-2"
            icon={faPlaneCircleCheck}
          />
        </div>
      </div>
      <h3 className="text-[30px] text-center pt-10 pb-3 font-bold">
        Providing Smart Security For The Smart Generation.
      </h3>
      <div className="flex justify-center items-center gap-5 pt-7">
        <button className="btn btn-primary rounded-none text-[14px] capitalize text-white">
          Commercial CCTV System
          <FontAwesomeIcon
            className="pl-1"
            icon={faArrowRightLong}
          ></FontAwesomeIcon>
        </button>
        <button className="btn bg-black rounded-none text-[14px] text-white capitalize">
          Residential CCTV System
        </button>
      </div>
    </div>
  );
};

export default Process;
