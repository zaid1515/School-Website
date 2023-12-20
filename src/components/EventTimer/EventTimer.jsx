import React, { useState, useEffect } from 'react';
import './EventTimer.css'


export default function EventTimer({ targetDate }){

  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      // Timer has reached or passed the target date
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  // Inside EventTimer component
useEffect(() => {
  console.log('Target Date:', targetDate);

  const intervalId = setInterval(() => {
    setTimeRemaining(calculateTimeRemaining());
  }, 1000);

  return () => clearInterval(intervalId);
}, [targetDate]);


  return (
    <div className="cd-timer" id="countdown">
      <div className="cd-item">
        <span className='center'>{timeRemaining.days}</span>
        <p>Days</p>
      </div>
      <div className="cd-item">
        <span className='center'>{timeRemaining.hours}</span>
        <p>Hrs</p>
      </div>
      <div className="cd-item" >
        <span className='center'>{timeRemaining.minutes}</span>
        <p>Mins</p>
      </div>
      <div className="cd-item">
        <span className='center'>{timeRemaining.seconds}</span>
        <p>Secs</p>
      </div>
    </div>
  );
};

