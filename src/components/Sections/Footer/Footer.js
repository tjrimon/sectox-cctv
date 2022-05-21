import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../../images/logo.png";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="hidden md:block container mx-auto mb-[-50px] backface-hidden">
        <div className="bg-white shadow-xl flex items-center justify-between">
          <div>
            <img width={140} src={logo} alt="" className="py-5 pl-7" />
          </div>
          <div className="text-secondary  text-lg flex justify-center items-center gap-5 ">
            <i class="fa-brands fa-facebook hover:text-white bg-gray-100 hover:bg-primary cursor-pointer rounded-full p-5"></i>
            <i class="fa-brands fa-twitter hover:text-white bg-gray-100 hover:bg-primary cursor-pointer rounded-full p-5"></i>
            <i class="fa-brands fa-behance hover:text-white bg-gray-100 hover:bg-primary cursor-pointer rounded-full p-5"></i>
            <i class="fa-brands fa-youtube hover:text-white bg-gray-100 hover:bg-primary cursor-pointer rounded-full p-5"></i>
            <i class="fa-brands fa-linkedin hover:text-white bg-gray-100 hover:bg-primary cursor-pointer rounded-full p-5"></i>
          </div>
          <a
            href="#home"
            className="bg-primary text-white py-7 px-5 flex flex-col justify-center items-center mr-[-2px]"
          >
            <i class="fa-solid fa-arrow-up"></i>
            <p>Back To Top</p>
          </a>
        </div>
      </div>
      <div className="bg-secondary">
        <div className="container  px-8 text-center md:text-left md:px-0 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          <div>
            <h3 className="text-white font-bold pt-10 pb-5">About Us</h3>
            <p className="text-gray-300">
              A traditional CCTV system comprises: One or more cameras (analog
              digital),each with a lens equipped with and image sensor.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold pt-10 pb-5">Get in Touch</h3>
            <p className="text-gray-300">
              27 Division St, New York, NY 10002, USA
            </p>
            <p className="text-gray-300 py-5">
              Mon – Fri: 7.00 – 22.00 <br />
              St – Sun: 9.00 – 20.00
            </p>
            <p className="text-gray-300">
              +1 800 123 456 789
              <br /> +1 800 987 654 321
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold pt-10 pb-5">Main Page</h3>
            <div className="grid grid-cols-2 text-[14px]">
              <a
                className="text-gray-300 flex py-2 items-center gap-2 text-decoration-none"
                href="#"
              >
                <i class="fa-solid fa-arrow-right"></i>About Us
              </a>
              <a
                className="text-gray-300 flex py-2 items-center gap-2 text-decoration-none"
                href="#"
              >
                <i class="fa-solid fa-arrow-right"></i>Career
              </a>
              <a
                className="text-gray-300 flex py-2 items-center gap-2 text-decoration-none"
                href="#"
              >
                <i class="fa-solid fa-arrow-right"></i>Customer
              </a>
              <a
                className="text-gray-300 flex py-2 items-center gap-2 text-decoration-none"
                href="#"
              >
                <i class="fa-solid fa-arrow-right"></i>Privacy
              </a>
              <a
                className="text-gray-300 flex py-2 items-center gap-2 text-decoration-none"
                href="#"
              >
                <i class="fa-solid fa-arrow-right"></i>Service
              </a>
              <a
                className="text-gray-300 flex py-2 items-center gap-2 text-decoration-none"
                href="#"
              >
                <i class="fa-solid fa-arrow-right"></i>Location
              </a>
              <a
                className="text-gray-300 flex py-2 items-center gap-2 text-decoration-none"
                href="#"
              >
                <i class="fa-solid fa-arrow-right"></i>Collections
              </a>
              <a
                className="text-gray-300 flex py-2 items-center gap-2 text-decoration-none"
                href="#"
              >
                <i class="fa-solid fa-arrow-right"></i>Our Expert
              </a>
              <a
                className="text-gray-300 flex py-2 items-center gap-2 text-decoration-none"
                href="#"
              >
                <i class="fa-solid fa-arrow-right"></i>Best Seller
              </a>
            </div>
          </div>
          <div className="flex md:flex-none flex-col justify-center items-center">
            <h3 className="text-white font-bold pt-10 pb-5">Get Newsletter</h3>
            <p className="text-gray-300">
              Sign up today for hints, tips & the latest product news
            </p>
            <form className="flex items-center w-56 py-5">
              <input
                type="text"
                placeholder="Email address"
                class="input w-full max-w-xs rounded-none bg-gray-700"
              />
              <button className="bg-primary p-4 text-white  flex flex-col justify-center items-center mr-[-2px]">
                <i class="fa-regular fa-envelope-open"></i>
              </button>
            </form>
            <div className="text-secondary pt-2  text-lg flex items-center gap-5 ">
              <i class="fa-brands fa-facebook text-gray-400 hover:text-white  cursor-pointer"></i>
              <i class="fa-brands fa-twitter text-gray-400 hover:text-white  cursor-pointer"></i>
              <i class="fa-brands fa-behance text-gray-400 hover:text-white  cursor-pointer"></i>
              <i class="fa-brands fa-youtube text-gray-400 hover:text-white  cursor-pointer"></i>
              <i class="fa-brands fa-linkedin text-gray-400 hover:text-white  cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className="bg-primary py-3">
          <div className="container mx-auto flex justify-between items-center">
            <p className="text-white text-center px-5 md:text-left md:px-0">
              Copyright © 2022 Sectox by ThemePure. All Rights Reserved.
            </p>
            <div className="flex hidden md:block justify-between gap-5 items-center">
              <a
                className="text-white flex py-2 items-center gap-2 text-decoration-none"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-white flex py-2 items-center gap-2 text-decoration-none"
                href="#"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
