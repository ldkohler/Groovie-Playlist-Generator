import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaHome,
  FaInfoCircle,
  FaSpotify,
  FaBars,
} from "react-icons/fa";
import "./index.css";



function Navbar() {

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
      <div className="flex items-center">
        <div className="logo-text">
          <span>made for </span>
        </div>
        <div className="flex-shrink-0 z-10">
        <a href="https://www.spotify.com/">
        <FaSpotify className="spotify-icon" />
        </a>
        </div>
        </div>
        <label htmlFor="my-drawer-4" className="drawer-button"> 
        <div className="p-2">
        <FaBars className="text-accent hover:text-accent-hover cursor-pointer menu-bars" /> 
      </div> 
        </label>
      </div> 
    <div className="drawer-side">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      <li><a><FaHome /><NavLink to="/"> Home </NavLink></a></li>
      <li><a><FaInfoCircle /><NavLink to="/about"> About </NavLink></a></li>
      <hr />
      <li><a href="https://www.linkedin.com/in/lucas-d-kohler/"><FaLinkedin /> Linkedin </a></li>
      <li><a href="https://github.com/ldkohler"><FaGithub /> Github </a></li>
    </ul>
  </div>
</div>
  );
}

export default Navbar;