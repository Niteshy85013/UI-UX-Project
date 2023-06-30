import React, { useState } from "react";
import "./Nav.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function NavSec() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleProfileClick = () => {
    if (user && user.role === "user") {
      navigate("/profile");
    } else {
      navigate("/admin");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) {
    return null; // Return null or a loading spinner if user data is not available yet
  }

  return (
    <>
      <nav className="p-4 bg-gray-600 text-gray-200 w-full sticky top-0 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex items-center pl-8">
            <div className="fst-italic">
              <a
                href="/home"
                className="transition duration-300 text-yellow-500"
                style={{ textDecoration: "none" }}
              >
                MarketHub
              </a>
            </div>
          </div>

          {/* MOBILE NAV ICON */}
          <div className="md:hidden block absolute top-4 right-8">
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
                  className="transition duration-300 text-gray-200 hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </a>
              </div>

              <div className="text-lg pr-8">
                <a
                  href="/bestSelling"
                  className="transition duration-300 ms-5 text-gray-200 hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Best Selling
                </a>
              </div>
              <div className="text-lg pr-8">
                <a
                  href="/"
                  className="transition duration-300 ms-5 text-gray-200 hover:text-yellow-500"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </a>
              </div>
            </ul>
          </div>

          <div className="md:flex">
            <a href="/profile">
              <button
                type="button"
                className="text-white fs-5 bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Sell Product
              </button>
            </a>

            {/* <!-- Dropdown menu --> */}
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleDropdownToggle}
              >
                Profile
                <svg
                  className="w-4 h-4 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <ul className="py-1">
                    <div>
                      <button
                        type="button"
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={handleProfileClick}
                      >
                        Dashboards
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={handleLogout}
                      >
                        Sign out
                      </button>
                    </div>
                  </ul>
                </div>
              )}
            </div>
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
              className="text-gray-200 cursor-pointer py-3 transition duration-300 hover:text-yellow-500"
            >
              Home
            </a>
            <a
              href="/bestSelling"
              className="text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 hover:text-yellow-500"
            >
              Best Selling
            </a>

            <a
              href="/"
              className="text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 hover:text-yellow-500"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavSec;
