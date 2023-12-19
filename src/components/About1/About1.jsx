import React from "react";
import './About1.css'
import Icon1 from '../../images/about-icon1.svg'
import Icon2 from '../../images/about-icon2.svg'
import Icon3 from '../../images/about-icon3.svg'
import aboutImg1 from '../../images/about2.png.webp'

export default function About1() {
     return (
          <div className="homeSec2">
               <div className="homeSec2-content sec">
                    <h3 className="center-text">
                         <div>
                              Welcome to our <strong className="homeSec2-heading">KidzCastle</strong>
                         </div>
                    </h3>
                    <p className="homeSec2-para center-text">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, excepturi omnis? In harum, vitae accusamus vero maiores voluptatum! Deserunt, architecto. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, nihil.

                    </p>
               </div>
               <div className="homeSec2-features flex">
                    <div className="features-text">
                         <div className="icon1-sec flex ">
                              <div className="about1-icon-div">
                                   <img src={Icon1} alt="icon1" />
                              </div>
                              <div className="about1-icon-txt">
                                   <h5>Inter School Sports</h5>
                                   <p className="homeSec2-para2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.

                                   </p>
                              </div>
                         </div>
                         <div className="icon2-sec flex">
                              <div className="about1-icon-div">
                                   <img src={Icon2} alt="icon2" />
                              </div>
                              <div className="about1-icon-txt">
                                   <h5>Inter School Sports</h5>
                                   <p className="homeSec2-para2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                   </p>
                              </div>
                         </div>
                         <div className="icon3-sec flex">
                              <div className="about1-icon-div">
                                   <img src={Icon3} alt="icon3" />
                              </div>
                              <div className="about1-icon-txt">
                                   <h5>Inter School Sports</h5>
                                   <p className="homeSec2-para2">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.

                                   </p>
                              </div>
                         </div>
                    </div>
                    <div className="features-pic">
                         <img src={aboutImg1} alt="" />
                    </div>
               </div>
          </div>
     )
}