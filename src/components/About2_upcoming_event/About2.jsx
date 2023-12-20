import React from "react";
import EventTimer from '../EventTimer/EventTimer'
import './About2.css'

export default function About2(props) {
     const eventDate = new Date(props.TargetDate);

     const dayOptions = { day: 'numeric' };
     const monthOptions = { month: 'short' };
     const yearOptions = { year: 'numeric' };

     const numericDay = eventDate.toLocaleDateString(undefined, dayOptions);
     const abbreviatedMonth = eventDate.toLocaleDateString(undefined, monthOptions);
     const numericYear = eventDate.toLocaleDateString(undefined, yearOptions);

     return (
          <div className="about2-cont">
               <div className="about2-center-div">
                    <div className="center flex">
                    <h5 className="center date" style={{ margin: '0 5px' }}>
                         {numericDay} 
                    </h5>
                    <h5 className="center date" style={{ margin: '0 5px' }}>
                    {abbreviatedMonth} 
                    </h5>
                    <h5 className="center date" style={{ margin: '0 5px' }}>
                    {numericYear} 
                    </h5>
                    </div>
                    <h4 className="about2-evetnm center">{props.eventName}</h4>
                    <p className="about2-event-desc center-text">
                         {props.desc}
                    </p>
                    <button className="view-event-btn center">View Event</button>
                    <EventTimer targetDate={eventDate} />
               </div>
          </div>
     )
}
