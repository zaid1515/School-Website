import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Mainlogo from "../../images/main-logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldFixNavbar = scrollPosition > 46; 
      setIsFixed(shouldFixNavbar);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClass = isFixed ? "navbar2 fixed" : "navbar2";

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
          <Link to="https://www.facebook.com" className="fb nav-link" style={{ color: "white" }}><FaFacebook /></Link>

          <Link to="https://www.x.com" className="x nav-link" style={{ color: "white" }}>
            <FaTwitter />
          </Link>
          <Link to="https://www.linkedin.com" className="in nav-link" style={{ color: "white" }}>
            <FaLinkedinIn />
          </Link>
          <Link to="https://www.instagram.com" className="insta nav-link" style={{ color: "white" }}>
            <RiInstagramFill />
          </Link>
        </div>
      </div>
      <nav className={navbarClass} id="mainnav">
        <img src={Mainlogo} alt="logo" className="main-logo" />
        <ul className="navbar-list ">
          <Link to="/"> <li> Home</li></Link>
          <Link to="/about">  <li>About</li></Link>
          <Link to="/class"> <li> Class</li></Link>
          <Link to="/blog"> <li> Blog</li></Link>
          <Link to="/contact">  <li>Contact</li></Link>
        </ul>
        <button className="enroll-btn">Enroll Now</button>
      </nav>
    </div>
  );
}
