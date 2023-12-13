import React from "react";
import "./Navbar.css";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Mainlogo from "../../images/main-logo.png"

export default function Navbar2() {
  return (
    <div className="nav-cont">
      <div className="prev-nav">
        <span className="loc">
          <div className="loc-log">
            <MdLocationPin />
          </div>{" "}
          Dharavi
        </span>
        <span className="phone">
          <div className="ph-log">
            <FaPhone />
          </div>{" "}
          +91 7389265921
        </span>
        <div className="social-links">
          <a href="" className="fb nav-link" style={{ color: "white" }}>
            <FaFacebook />
          </a>
          <a href="" className="x nav-link" style={{ color: "white" }}>
            <FaTwitter />
          </a>
          <a href="" className="in nav-link" style={{ color: "white" }}>
            <FaLinkedinIn />
          </a>
          <a href="" className="insta nav-link" style={{ color: "white" }}>
            <RiInstagramFill />
          </a>
        </div>
      </div>
      <nav className="navbar2" id="mainnav">
          <img src={Mainlogo} alt="logo" className="main-logo"/>
        <ul className="navbar-list ">
          <li>Home</li>
          <li>About</li>
          <li>Class</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <button className="enroll-btn">Enroll Now</button>
      </nav>
    </div>
  );
}
