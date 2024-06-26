import React from "react";
import "../Styles/Nav2.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Nav2() {
  return (
    <div className=" nav2_menu d-flex justify-content-between">
      <div className="container menu_wrapper">
        <div className="logo">
          <img src="" alt="" />
        </div>
        <div className="menus">
          <h> Hire from us</h>
          <h>Become an instructor</h>
          <h>Job seekers</h>
          <h>Quick Enquiry</h>
        </div>
      </div>
      <div className="border">
      </div>
    </div>
  );
}

export default Nav2;