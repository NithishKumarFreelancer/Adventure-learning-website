import React from "react";
import { Link } from "react-router-dom";

function Nav2() {
  return (
    <nav className="tb:hidden max-1088:hidden ">
      <div className="container lp:max-w-full tb:max-w-full lp:px-10 h-16 flex mx-auto sm:max-w-full sm:px-0">
        <div className="flex justify-between items-center flex-1 p-4">
          <div className="flex gap-4">
            <div className="flex gap-2 contact-info align-items-center">
             
              <img className="w-5 h-5" src="Vector.png" alt="" />
            
              <h className="font-medium">info@adventurelearning.in</h>
            </div>
            <div className="flex gap-2 contact-info align-items-center">
              <img className="w-5 h-5" src="call.png" alt="" />
              <h>+91 81110 05300</h>
            </div>
          </div>
          <div className="flex justify-between items-center menu-text  lp:gap-6 gap-16">
            <h className="menus">Hire from us</h>
            <h className="menus">Become an instructor</h>
            <h className="menus">Job seekers</h>
            <h className="menus">Quick Enquiry</h>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav2;