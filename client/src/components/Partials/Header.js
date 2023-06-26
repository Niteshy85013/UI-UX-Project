import React, { useState } from "react";
import "./header.css";

function Header() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <nav className="p-4 bg-gray-600 text-gray-200 w-full h-28 sticky  top-0 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-8">
            <div className="pr-8 fst-italic">
              <a
                href="/"
                className="transition duration-300 fs-1 text-yellow-500 "
                style={{ textDecoration: "none" }}
              >
                MarketHub
              </a>
            </div>
          </div>

          {/* MOBILE NAV ICON */}
          <div className="md:hidden block absolute top-4 right-8 fixed">
            <button
              aria-label="navigation"
              type="button"
              className="md:hidden text-black-500 transition duration-300 focus:outline-none focus:text-black hover:text-red"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars text-3xl text-black-200" id="bars"></i>{" "}
            </button>
          </div>

          {/* NAVIGATION - LARGE SCREENS */}
          <div className="hidden md:flex">
            <ul className="hidden md:flex">
              <div className="text-lg pr-8">
                <a
                  href="/"
                  className="transition duration-300 text-gray-200   hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </div>
              <div className="text-lg pr-8">
                <a
                  href="/"
                  className="transition duration-300 ms-5  text-gray-200   hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Best Selling
                </a>
              </div>
              <div className="text-lg pr-8">
                <a
                  href="/"
                  className="transition duration-300 ms-5 text-gray-200  hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </a>
              </div>
            </ul>
          </div>

          <div className=" md:flex">
            <a
              href="/"
              class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
              style={{ textDecoration: "none" }}
            >
              <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span class="relative text-white">Sell Product</span>
            </a>

            <a href="/">
              <button class=" ms-2 bg-black text-white font-semibold  py-2 px-4 border   rounded">
                Login
              </button>
            </a>

            <a href="/">
              <button class=" ms-2 bg-blue-700 text-white font-semibold  py-2 px-4 border   rounded">
                Signup
              </button>
            </a>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div
          id="mobileMenu"
          className={`${
            mobileMenuVisible ? "flex" : "hidden"
          } w-full mx-auto py-8 text-center`}
        >
          <div className="flex flex-col justify-center items-center w-full">
            <a
              href="/"
              className=" text-gray-200 cursor-pointer py-3 transition duration-300     hover:text-yellow-500"
            >
              Home
            </a>
            <a
              href="/"
              className=" text-gray-200 cursor-pointer mt-1 py-3 transition duration-300    hover:text-yellow-500"
            >
              Best Selling
            </a>

            <a
              href="/"
              className=" text-gray-200 cursor-pointer mt-1 py-3 transition duration-300     hover:text-yellow-500"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
