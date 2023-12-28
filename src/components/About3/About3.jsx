import React from 'react'
import TrCard from '../TrCard/TrCard'
import Tr1 from '../../images/tr1.webp'
import Tr2 from '../../images/tr2.webp'
import Tr3 from '../../images/tr3.webp'
import './About3.css'

function About3() {
     return (
          <div className="about3 tr-sect">
               <div className="homeSec2-content sec">
                    <h3 className="center-text">
                         <div>
                              Expert Teachers
                         </div>
                    </h3>
                    <p className="homeSec2-para center-text">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, excepturi omnis?  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, nihil.
                    </p>
               </div>
               <div className="tr-details">
                    <TrCard name="Mr. Anup Baloj" post="Sports Instructor" imgpath={Tr1}></TrCard>
                    <TrCard name="Mrs. Rita Sharma" post="Sports Instructor" imgpath={Tr2}></TrCard>
                    <TrCard name="Mr. Rohit Vashe" post="Sports Instructor" imgpath={Tr3}></TrCard>
               </div>
          </div>
     )
}

export default About3