import React from "react";
import About1 from '../../components/About1/About1'
import About2 from '../../components/About2/About2'
import NewPgImg from "../../components/NewPgImg/NewPgImg";

export default function About() {
     return(
          <div className="about-pg">
               <NewPgImg name="About Us"/>
               <About1></About1>
               <About2 TargetDate='2024-06-31T23:59:59' 
               eventName="Drawing Event" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit commodi quidem. Officiis.Sint velit commodi quidem. Officiis, est veniam."></About2>
          </div>
     )
}
