import React from "react";
import "../Styles/Nav.css";

function Nav() {

  return (
    <div className="nav md:bg-white lg:bg-custom-bar-bg flex justify-center ">
      <div className="nav_wrapper flex max-[768px]:px-6 md:px-6 lg:px-0  max-w-screen-xl justify-between items-center">
        <div className="logo">
          <img src="adventure logo.svg" alt="" />
        </div>
        <div className="nav_menus  max-[768px]:gap-10 sm:flex  md:gap-7 md:flex justify-end  lg:flex lg:gap-16 ">
          <h  className="active max-[768px]:hidden md:hidden lg:flex">Home</h>
          <h  className="max-[768px]:hidden md:hidden lg:flex">Courses</h>
          <h className="max-[768px]:hidden md:hidden lg:flex" >About us</h>
          <h className="max-[768px]:hidden md:hidden lg:flex">Contact us</h>
          <h className="login-btn">Login</h>
        <div className="signup-btn">Sign up</div>
        </div>
      </div>
    </div>
  );
}

export default Nav;