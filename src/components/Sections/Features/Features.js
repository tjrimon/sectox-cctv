import {
  faArrowRightLong,
  faFileShield,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Features = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/ScsQ28j/feature.png')] bg-cover bg-center bg-no-repeat">
      <div className="container flex mx-auto py-20">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <div className="flex items-center text-primary font-bold uppercase">
            <p>features</p>
            <hr className="ml-3 border-[1px] border-primary w-8 " />
          </div>
          <h3 className="text-[35px] lg:text-[60px] font-bold">
            Opting For Security & <br />
            Making You Free
          </h3>
          <div className="grid grid-cols-2">
            <div className="flex items-center bg-white p-2 m-2">
              <FontAwesomeIcon
                className="text-primary rounded-full p-5 text-2xl"
                icon={faFileShield}
              ></FontAwesomeIcon>
              <div>
                <h3 className="text-[15px] font-bold">
                  Full-Time <br /> Device Protection
                </h3>
              </div>
            </div>
            <div className="flex items-center bg-white p-2 m-2">
              <FontAwesomeIcon
                className="text-primary rounded-full p-5 text-2xl"
                icon={faFileShield}
              ></FontAwesomeIcon>
              <div>
                <h3 className="text-[15px] font-bold">
                  Complete <br /> Confidentiality
                </h3>
              </div>
            </div>
            <div className="flex items-center bg-white p-2 m-2">
              <FontAwesomeIcon
                className="text-primary rounded-full p-5 text-2xl"
                icon={faFileShield}
              ></FontAwesomeIcon>
              <div>
                <h3 className="text-[15px] font-bold">
                  Remote Housing
                  <br /> Monitoring
                </h3>
              </div>
            </div>
            <div className="flex items-center bg-white p-2 m-2">
              <FontAwesomeIcon
                className="text-primary rounded-full p-5 text-2xl"
                icon={faFileShield}
              ></FontAwesomeIcon>
              <div>
                <h3 className="text-[15px] font-bold">
                  Full Backup
                  <br /> of Information
                </h3>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 pt-7">
            <button class="btn btn-primary rounded-none text-[14px] capitalize text-white">
              Get in Touch
              <FontAwesomeIcon
                className="pl-1"
                icon={faArrowRightLong}
              ></FontAwesomeIcon>
            </button>
            <button class="btn bg-black rounded-none text-[14px] text-white capitalize">
              7 Days Free Trail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
