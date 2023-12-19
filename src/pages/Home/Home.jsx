import React from "react";
import './Home.css'
import About1 from "../../components/About1/About1";

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
          </div>
     )
}