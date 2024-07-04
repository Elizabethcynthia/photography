import React from "react";
import './Navbar.css';

const Navbar = () =>{
 return (
    <nav className="navbar">
       <div className="navbar-logo">
         <a href="/">PHOTOGRAPHY <span>WEBSITE</span></a>
       </div>
       <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#footer">Footer</a></li>
       </ul>
    </nav>
 )
}
export default Navbar;