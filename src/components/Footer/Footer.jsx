import React from 'react';
//import "./Footer.css";

function Footer() {
  return (
    <footer className="mt-30">
      <div className="foot-panel1">
        Back to Top
      </div>
      <div className="foot-panel2">
        <ul className="mt-20">
          <p>Get to Know us</p>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">About Amazon</a>
          <a href="#">Investor Relations</a>
          <a href="#">Amazon Devices</a>
          <a href="#">Amazon Science</a>
        </ul>
        {/* Repeat this block of 'ul' as needed */}
      </div>
      <div className="foot-panel3">
        <div className="logo"></div>
      </div>
      <div className="foot-panel4">
        <div className="options text-center pt-30">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Your Ads Privacy Choices</a>
        </div>
        <div className="copyright text-center pt-10">
          © 1996-2023, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
}

export default Footer;
