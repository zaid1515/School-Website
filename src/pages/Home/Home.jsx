import React from "react";
import './Home.css'
import About1 from "../../components/About1_Features/About1";
import About2 from "../../components/About2_upcoming_event/About2";

export default function Home() {
     return (
          <div id="content">
               <div className="homeSec1">
                    <div id="content-div">
                         <h1>Quality <br /> Learning</h1>

                         <h2>For Every Child</h2>

                         <button class="explore-btn">Explore Classes</button>
                    </div>
               </div>
               <About1/>
               <About2 TargetDate='2024-06-31T23:59:59' 
               eventName="Drawing Event" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint velit commodi quidem. Officiis.Sint velit commodi quidem. Officiis, est veniam."/>
          </div>
     )
} 