import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
const location =  useLocation()
console.log(location.pathname)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Effect to disable scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-navBorder bg-navbg">
        <div className="container lp:max-w-full tb:max-w-full sm:max-w-full lp:px-10 h-16 flex mx-auto sm:px-0">
          <div className="flex justify-between items-center flex-1 p-4">
            <div className="flex gap-4">
              <img
                className="menu-btn sm:flex tb:flex max-1088:flex hidden w-6"
                src="menu.svg"
                alt="Menu"
                onClick={toggleSidebar}
              />
               <Link to="/">
              <img
                className="w-36"
                src="adventure-logo.svg"
                alt="Adventure Logo"
              />
               </Link>

            </div>
            <div className="flex justify-between items-center menu-text lp:gap-6 gap-16">
              {/* Menu items */}
              <Link to="/">
              <h className={`menus flex sm:hidden tb:hidden ${location.pathname == "/" ? "underline ":""}`}>Home</h>
              </Link>
              <h className="menus flex sm:hidden tb:hidden">Courses</h>
              <h className="menus flex sm:hidden tb:hidden">About us</h>
              <Link to="/contact">
              <h className={`menus flex sm:hidden tb:hidden ${location.pathname == "/contact" ? "underline ":"" }`}>Contact us</h>
              </Link>

              {/* Always show Login and Sign up */}
              {/* <h className="menus">Login</h>
              <p className="try-Free-btn">Sign up</p> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="bg-white h-screen w-64 p-6 flex flex-col shadow-lg">
          <div className="flex justify-end">
            <button onClick={toggleSidebar}>
              <img src="close.svg" alt="Close" className="h-5" />
            </button>
          </div>
          <div className="mt-4">
            <div className="mb-6">
              <h2 className="text-sm font-bold text-[#143AA0] uppercase tracking-wider mb-2">
                Contact Us
              </h2>
              <p className="text-gray-600">info@adventurelearning.in</p>
              <p className="text-gray-600">+91 81110 05300</p>
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-bold text-[#143AA0] uppercase tracking-wider mb-2">
                Quick Links
              </h2>
              <div className="flex flex-col gap-2 pl-8 text-[#5f6f99]">
                <h className="text-base font-semibold hover:text-[#3435CE] cursor-pointer transition-colors duration-200">
                  Hire from us
                </h>
                <h className="text-base font-semibold hover:text-[#3435CE] cursor-pointer transition-colors duration-200">
                  Become an instructor
                </h>
                <h className="text-base font-semibold hover:text-[#3435CE] cursor-pointer transition-colors duration-200">
                  Job seekers
                </h>
                <h className="text-base font-semibold hover:text-[#3435CE] cursor-pointer transition-colors duration-200">
                  Quick Enquiry
                </h>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-bold text-[#143AA0] uppercase tracking-wider mb-2">
                Navigation
              </h2>
              <div className="flex flex-col gap-2 pl-8 text-[#5f6f99]">
                <Link to="/">
                <h className="text-base font-semibold hover:text-[#3435CE] cursor-pointer transition-colors duration-200">
                  Home
                </h>
                </Link>
                <h className="text-base font-semibold hover:text-[#3435CE] cursor-pointer transition-colors duration-200">
                  Courses
                </h>
                <h className="text-base font-semibold hover:text-[#3435CE] cursor-pointer transition-colors duration-200">
                  About us
                </h>
                <Link to="/contact">
                <h className="text-base font-semibold hover:text-[#3435CE] cursor-pointer transition-colors duration-200">
                  Contact us
                </h>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-bold text-[#143AA0] uppercase tracking-wider mb-2">
                Account
              </h2>
              <div className="flex flex-col gap-1 pl-8">
                <h className="text-base font-semibold text-[#5f6f99] hover:text-[#3435CE] cursor-pointer transition-colors duration-200">
                  Login
                </h>
                <p className="font-bold mt-2 text-center py-2 px-4 bg-[#3435CE] text-white rounded-lg hover:bg-[#3435CE] transition-colors duration-200">
                  Sign up
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-sm font-bold text-[#143AA0] uppercase tracking-wider mb-2">
                SOCIAL MEDIA
              </h2>
              <div className="flex flex-col gap-1 pl-8">
                <ul className="flex gap-5">
                  <a href="https://www.instagram.com/adventure_learning_official/">
                    <img src="/socialMedia/insta.svg" className="h-6" alt="" />
                  </a>
                  <a href="https://www.youtube.com/@Adventure_Learning">
                    <img src="/socialMedia/Yt.svg" className="h-6" alt="" />
                  </a>
                  <a href="https://www.facebook.com/AdventureLearningTbm/">
                    <img
                      src="/socialMedia/Vector-2.svg"
                      className="h-6"
                      alt=""
                    />
                  </a>
                  <a href="https://x.com/Advelearning">
                    <img src="socialMedia/twitter.svg" className="h-6" alt="" />
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
