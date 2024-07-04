import React from "react";
import './Navbar.css';
import { Outlet, Link } from "react-router-dom";

const Navbar = () =>{
 return (
    <nav className="navbar">
       <div className="navbar-logo">
         <a href="/">PHOTOGRAPHY <span>WEBSITE</span></a>
       </div>
       <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="about">About</Link></li>
          <li><Link to="gallery">Gallery</Link></li>
          <li><Link to="service">Service</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="footer">Footer</Link></li>
       </ul>
       <Outlet/>
    </nav>
 )
}
export default Navbar;