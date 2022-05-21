import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import ipCamera from "../../../images/ip-cam.png";
import ipCctv from "../../../images/ip-cctv.png";
import dualCamera from "../../../images/duet-cam.png";
import {
  faCheck,
  faUserShield,
  faShieldVirus,
  faShieldHalved,
  faBuildingShield,
  faShieldHeart,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [openTab, setOpenTab] = useState(2);

  return (
    <div className="bg-[#F8F8F8]">
      <div className=" container mx-auto py-24 ">
        <div className="flex text-center justify-center items-center text-primary font-bold uppercase">
          <hr className="ml-3 border-[1px]  border-primary w-8 mr-3" />
          <p className="text-center">Services</p>
          <hr className="ml-3 border-[1px]  border-primary w-8 " />
        </div>
        <h3 className="text-[35px] text-center pb-3 lg:text-[60px] font-bold">
          What We Provide
        </h3>

        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="grid grid-cols-2 gap-5 md:flex mb-0  list-none  pt-3 pb-4  w-3/4 mx-auto"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-0 py-3 shadow-lg  block leading-normal " +
                    (openTab === 1
                      ? "text-white bg-primary"
                      : "text-primary bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  IP Camera
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-0 py-3 shadow-lg  block leading-normal " +
                    (openTab === 2
                      ? "text-white bg-primary"
                      : "text-primary bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  IP CCTV
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-0 py-3 shadow-lg  block leading-normal " +
                    (openTab === 3
                      ? "text-white bg-primary"
                      : "text-primary bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Duet Security
                </a>
              </li>

              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-0 py-3 shadow-lg  block leading-normal " +
                    (openTab === 4
                      ? "text-white bg-primary"
                      : "text-primary bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Cyber Security
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg ">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    {/* tab content item  */}
                    <div className="md:flex gap-8 ">
                      {/* tab image  */}
                      <div className="md:mb-[-50px] pt-5 pl-5">
                        <img src={ipCamera} alt="" />
                      </div>
                      {/* content  */}
                      <div className="md:w-1/2 pt-5 text-center md:text-left">
                        <h3 className="rounded-full bg-primary inline-block py-4 px-3 text-2xl font-bold text-white">
                          <small>$</small>99
                        </h3>
                        <h3 className="text-2xl lg:text-3xl font-bold py-5">
                          Individual IP Camera Solution
                        </h3>
                        <p>
                          Stands for Closed Circuit Television. It is a video
                          system that consists of strategically placed video
                          cameras around an area that records footage, and is
                          then transmitted to a display monitor(s) for real-time
                          viewing as well as footage playback.
                        </p>
                        <div className="flex flex-wrap pt-8 pb-5">
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Departure of the expert
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Configure software
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              24/7 Support
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Remote Administration
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Special application
                            </span>
                          </p>
                        </div>
                        <hr className="bg-primary " />
                        <div className="text-gray-400 flex justify-between py-8 text-[40px]">
                          <FontAwesomeIcon icon={faShieldHalved} />
                          <FontAwesomeIcon
                            className="text-primary"
                            icon={faShieldVirus}
                          />
                          <FontAwesomeIcon icon={faUserShield} />
                          <FontAwesomeIcon icon={faBuildingShield} />
                          <FontAwesomeIcon icon={faShieldHeart} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    {/* tab content item  */}
                    <div className="md:flex gap-8 ">
                      {/* tab image  */}
                      <div className="md:mb-[-50px] pt-5 pl-5">
                        <img src={ipCctv} alt="" />
                      </div>
                      {/* content  */}
                      <div className="md:w-1/2 pt-5 text-center md:text-left">
                        <h3 className="rounded-full bg-primary inline-block py-4 px-3 text-2xl font-bold text-white">
                          <small>$</small>59
                        </h3>
                        <h3 className="text-2xl lg:text-3xl font-bold py-5">
                          Individual CCTV Solution
                        </h3>
                        <p>
                          Stands for Closed Circuit Television. It is a video
                          system that consists of strategically placed video
                          cameras around an area that records footage, and is
                          then transmitted to a display monitor(s) for real-time
                          viewing as well as footage playback.
                        </p>
                        <div className="flex flex-wrap pt-8 pb-5">
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Departure of the expert
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Configure software
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              24/7 Support
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Remote Administration
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Special application
                            </span>
                          </p>
                        </div>
                        <hr className="bg-primary " />
                        <div className="text-gray-400 flex justify-between py-8 text-[40px]">
                          <FontAwesomeIcon icon={faShieldHalved} />
                          <FontAwesomeIcon
                            className="text-primary"
                            icon={faShieldVirus}
                          />
                          <FontAwesomeIcon icon={faUserShield} />
                          <FontAwesomeIcon icon={faBuildingShield} />
                          <FontAwesomeIcon icon={faShieldHeart} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    {/* tab content item  */}
                    <div className="md:flex gap-8 ">
                      {/* tab image  */}
                      <div className="md:mb-[-50px] pt-5 pl-5">
                        <img src={dualCamera} alt="" />
                      </div>
                      {/* content  */}
                      <div className="md:w-1/2 pt-5 text-center md:text-left">
                        <h3 className="rounded-full bg-primary inline-block py-4 px-3 text-2xl font-bold text-white">
                          <small>$</small>59
                        </h3>
                        <h3 className="text-2xl lg:text-3xl font-bold py-5">
                          Individual Duet Security
                        </h3>
                        <p>
                          Stands for Closed Circuit Television. It is a video
                          system that consists of strategically placed video
                          cameras around an area that records footage, and is
                          then transmitted to a display monitor(s) for real-time
                          viewing as well as footage playback.
                        </p>
                        <div className="flex flex-wrap pt-8 pb-5">
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Departure of the expert
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Configure software
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              24/7 Support
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Remote Administration
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Special application
                            </span>
                          </p>
                        </div>
                        <hr className="bg-primary " />
                        <div className="text-gray-400 flex justify-between py-8 text-[40px]">
                          <FontAwesomeIcon icon={faShieldHalved} />
                          <FontAwesomeIcon
                            className="text-primary"
                            icon={faShieldVirus}
                          />
                          <FontAwesomeIcon icon={faUserShield} />
                          <FontAwesomeIcon icon={faBuildingShield} />
                          <FontAwesomeIcon icon={faShieldHeart} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={openTab === 4 ? "block" : "hidden"}
                    id="link3"
                  >
                    {/* tab content item  */}
                    <div className="md:flex gap-8 ">
                      {/* tab image  */}
                      <div className="md:mb-[-50px] pt-5 pl-5 ">
                        <img src={ipCctv} alt="" />
                      </div>
                      {/* content  */}
                      <div className="md:w-1/2 pt-5 text-center md:text-left">
                        <h3 className="rounded-full bg-primary inline-block py-4 px-3 text-2xl font-bold text-white">
                          <small>$</small>79
                        </h3>
                        <h3 className="text-2xl lg:text-3xl font-bold py-5">
                          Cyber Security
                        </h3>
                        <p>
                          Stands for Closed Circuit Television. It is a video
                          system that consists of strategically placed video
                          cameras around an area that records footage, and is
                          then transmitted to a display monitor(s) for real-time
                          viewing as well as footage playback.
                        </p>
                        <div className="flex flex-wrap pt-8 pb-5">
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Departure of the expert
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Configure software
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              24/7 Support
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Remote Administration
                            </span>
                          </p>
                          <p>
                            <FontAwesomeIcon
                              className="pr-2 text-primary"
                              icon={faCheck}
                            ></FontAwesomeIcon>
                            <span className="font-bold mr-10">
                              Special application
                            </span>
                          </p>
                        </div>
                        <hr className="bg-primary " />
                        <div className="text-gray-400 flex justify-between py-8 text-[40px]">
                          <FontAwesomeIcon icon={faShieldHalved} />
                          <FontAwesomeIcon
                            className="text-primary"
                            icon={faShieldVirus}
                          />
                          <FontAwesomeIcon icon={faUserShield} />
                          <FontAwesomeIcon icon={faBuildingShield} />
                          <FontAwesomeIcon icon={faShieldHeart} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
