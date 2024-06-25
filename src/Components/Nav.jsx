import React from 'react'
import "../Styles/Nav.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/Nav.css"

function Nav() {
  return (
    <div className='nav'>
      <div className="d-flex nav-contact-info">
        <div className='d-flex gap-2 contact-info align-items-center'>
            <img className='icons-width' src="Vector.png" alt="" />
            <h>Info@adventurelearning.in</h>
        </div>
        <div className='d-flex gap-2 contact-info align-items-center'>
        <img  className='icons-width' src="call.png" alt="" />
        <h>+91 9076235412</h>
        </div>
        </div>
        <div className="nav_menus">
            <h className="active">Home</h>
            <h>Courses</h>
            <h>About us</h>
            <h>Contact us</h>
            <h className="login-btn">Login</h>
            <div className='signup-btn'>Sign up</div>
        </div>
      </div>
  )
}

export default Nav