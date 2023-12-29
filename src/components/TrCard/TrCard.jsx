import React from 'react'
import './TrCard.css'
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

function TrCard(props) {
  return (
    <div className="tr-card">
      <div className="tr-img">
        <img src={props.imgpath} alt="" />
        <div className="tr-caption">
          <ul className="tr-social">
            <li className="tr-link">
              <Link to="https://www.facebook.com" style={{ color: "white" }}><FaFacebook /></Link>
            </li>
            <li className="tr-link"><Link to="https://www.linkedin.com" style={{ color: "white" }}><FaLinkedinIn /></Link></li>
            <li className="tr-link">
              <Link to="https://www.x.com" style={{ color: "white" }}>
                <FaTwitter /></Link></li>
            <li className="tr-link"><Link to="https://www.instagram.com" style={{ color: "white" }}><RiInstagramFill /></Link></li>
          </ul>
        </div>
      </div>
      <div className="single-tr-details">
        <h3 className="tr-name">{props.name}
        </h3>
        <h4 className="tr-post">{props.post}</h4>
      </div>
    </div>
  )
}

export default TrCard