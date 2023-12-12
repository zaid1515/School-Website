import React from "react";
import "./Navbar.css";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function Navbar2() {
     return (
          <div className="nav-cont">
               <div className="prev-nav">
                    <span className="loc">
                         <MdLocationPin /> Dharavi</span>
                    <span className="phone">
                         <FaPhone />
                         +91 7389265921</span>
                    <div className="social-links">
                         <a href="" className="fb"><FaFacebook /></a>
                         <a href="" className="x"><FaTwitter /></a>
                         <a href="" className="in"><FaLinkedinIn /></a>
                         <a href="" className="insta"><RiInstagramFill /></a>
                    </div>
               </div>
               <nav className="navbar2" id="mainnav">
                    <ul className="navbar-links ">
                         <li>
                              Home
                         </li>
                         <li>
                              About
                         </li>
                         <li>
                              Class
                         </li>
                         <li>
                              Blog +
                         </li>
                         <li>
                              Contact
                         </li>
                    </ul>
               </nav>
              
          </div>
     );
}
