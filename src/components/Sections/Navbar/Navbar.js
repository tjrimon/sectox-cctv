import {
  faPlus,
  faSearch,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../images/logo.png";

const Navbar = () => {
  const mainMenu = (
    <>
      <li tabindex="0">
        <a class="justify-between">
          Home
          <FontAwesomeIcon icon={faPlus} className="text-sm ml-[-8px]" />
        </a>
        <ul class="p-2 font-normal bg-white">
          <li>
            <a>Home 1</a>
          </li>
          <li>
            <a>Home 2</a>
          </li>
          <li>
            <a>Home 3</a>
          </li>
        </ul>
      </li>
      <li>
        <a>About</a>
      </li>
      <li tabindex="0">
        <a class="justify-between">
          Services
          <FontAwesomeIcon icon={faPlus} className="text-sm ml-[-8px]" />
        </a>
        <ul class="p-2 font-normal">
          <li>
            <a>Service 1</a>
          </li>
          <li>
            <a>Service 2</a>
          </li>
          <li>
            <a>Service 3</a>
          </li>
        </ul>
      </li>
      <li tabindex="0">
        <a class="justify-between">
          Pages
          <FontAwesomeIcon icon={faPlus} className="text-sm ml-[-8px]" />
        </a>
        <ul class="p-2 font-normal">
          <li>
            <a>Page 1</a>
          </li>
          <li>
            <a>Page 2</a>
          </li>
          <li>
            <a>Page 3</a>
          </li>
        </ul>
      </li>
      <li>
        <a>News</a>
      </li>
      <li>
        <a>Shop</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div>
      {/* Top Navbar  */}
      <div className="hidden md:block">
        <div className="h-[40px] flex justify-center items-center px-10 bg-gray-100">
          <div class="navbar p-0 m-0">
            <div class="flex-1">
              <p class="text-second">
                <b>Limited Time Offer:</b> Shop online and get free no-contact
                deliver
              </p>
            </div>
            <div class="flex-none">
              <ul class="menu menu-horizontal p-0 text-secondary">
                <li>
                  <a className="py-0 text-sm font-bold">FAQ</a>
                </li>
                <li>
                  <a className="py-0 text-sm font-bold">Careers</a>
                </li>
                <li tabindex="0">
                  <a className="py-0 text-sm">
                    English
                    <svg
                      class="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul class="p-2 bg-gray-100 text-secondary">
                    <li>
                      <a className="">Spanish</a>
                    </li>
                    <li>
                      <a className="">Bangla</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* main nav section  */}

      <div class="navbar bg-white py-6 px-10">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
            >
              {mainMenu}
            </ul>
          </div>
          <a href="#">
            <img width="120" src={logo} alt="" />
          </a>
        </div>
        <div class="navbar-center hidden lg:flex font-bold">
          <ul class="menu menu-horizontal p-0">{mainMenu}</ul>
        </div>
        <div class="navbar-end">
          <a
            class="btn bg-white hover:bg-white rounded-none text-[14px] text-secondary border-gray-300 hover:border-gray-300 mr-3 "
            href="#"
          >
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </a>
          <a
            class="btn bg-white hover:bg-white rounded-none text-[14px] text-secondary border-gray-300 hover:border-gray-300 mr-3"
            href="#"
          >
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
          <a
            class="btn btn-primary rounded-none text-[14px] text-white"
            href="#"
          >
            Make Appointment
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
