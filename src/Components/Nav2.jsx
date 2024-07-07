import React from "react";
import "../Styles/Nav2.css";

function Nav2() {
  return (
    <div className="nav2_menu  min-[320px]:hidden  lg:flex  flex justify-between items-center">
      <div className="menu_wrapper max-w-screen-xl flex items-center">
        <div className="d-flex gap-5">
        <div className="d-flex gap-2 contact-info align-items-center">
          <img className="icons-width" src="Vector.png" alt="" />
          <h>Info@adventurelearning.in</h>
        </div>
        <div className="d-flex gap-2 contact-info align-items-center">
          <img className="icons-width" src="call.png" alt="" />
          <h>+91 9076235412</h>
        </div>
      </div>
        <div className="menus">
          <h> Hire from us</h>
          <h>Become an instructor</h>
          <h>Job seekers</h>
          <h>Quick Enquiry</h>
        </div>
      </div>
      {/* <div className="border"></div> */}
    </div>
  );
}

export default Nav2;