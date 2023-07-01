import React, { useState } from "react";
import "./header.css";
import { useSelector } from "react-redux";

function Header() {
  const { user } = useSelector((state) => state.users);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <>
      <nav className="p-4 bg-gray-600 text-gray-200 w-full  shadow-md sticky-top">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-8">
            <div className=" fst-italic">
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
          <div className="md:hidden block absolute top-4 right-8 ">
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
                  href="/bestSelling"
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
            <a href="/profile">
              <button
                type="button"
                class="text-white fs-5 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Sell Product
              </button>
            </a>

            <a href="/login">
              <button class=" ms-2 bg-black text-white font-semibold  py-2 px-4 border   rounded">
                Login
              </button>
            </a>

            <a href="/register">
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
              href="/bestSelling"
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
