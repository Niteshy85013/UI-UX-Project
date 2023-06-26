import React, { useState } from "react";
import "./header.css";

function Header() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <nav className="p-4 bg-gray-600 text-gray-200 w-full sticky  top-0 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-8">
            <i className="text-2xl fas fa-campground"></i>
            <h1 className="font-serif tracking-wide font-bold text-xl pl-4">
              MarketHub
            </h1>
          </div>

          {/* MOBILE NAV ICON */}
          <div className="md:hidden block absolute top-4 right-8 fixed">
            <button
              aria-label="navigation"
              type="button"
              className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars text-3xl" id="bars"></i>{" "}
            </button>
          </div>

          {/* NAVIGATION - LARGE SCREENS */}
          <div className="hidden md:flex">
            <ul className="hidden md:flex">
              <li className="text-lg pr-8">
                <a
                  href="/"
                  className="transition duration-300    hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li className="text-lg pr-8">
                <a
                  href="/"
                  className="transition duration-300      hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Best Selling
                </a>
              </li>
              <li className="text-lg pr-8">
                <a
                  href="/"
                  className="transition duration-300    hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden md:flex">
            <a href="/">
              <button
                class="btn2  px-10  relative border border-black uppercase font-semibold tracking-wider leading-none overflow-hidden hover:text-teal-600 rounded"
                type="button"
              >
                <span class="absolute inset-0 bg-white"></span>
                <span class="absolute inset-0 flex justify-center items-center font-bold">
                  Sell Product
                </span>
                Sell Product
              </button>
            </a>
            <a href="/">
              <button class="bg-transparent hover:bg-green-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Login
              </button>
            </a>
            <a href="/">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
