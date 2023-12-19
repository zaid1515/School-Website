import React from "react";
import './Home.css'
export default function Home() {
     return (
          <div id="content">
               <div className="homeSec1">
                    <div className="center" id="content-div">
                         <h1>Quality <br /> Learning</h1>

                         <h2>For Every Child</h2>

                         <button class="explore-btn">Explore Classes</button>
                    </div>
               </div>
               <div className="homeSec2 sec">
                    <h2 className="center">
                         Welcome to our <span className="homeSec2-haeding">KidzCastle</span>
                    </h2>
                    <p className="homeSec2-para">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, excepturi omnis? In harum, vitae accusamus vero maiores voluptatum! Deserunt, architecto.
                    </p>
                    <div className="homeSec2-features">
                         <div className="features-text">

                         </div>
                         <div className="features-pic">

                         </div>
                    </div>
               </div>
          </div>
     )
}