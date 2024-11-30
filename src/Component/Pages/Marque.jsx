import React from 'react';
import "./Marque.css";
import Marquee from 'react-fast-marquee';

export const Marque = () => {
  return (
    <div className='marque-main'>
      <Marquee 
        direction="left" 
        speed={60} 
        delay={10} 
        style={{ height: '50px', width: '100%', margin: 'auto' }}
      >
        <h1 className="marquee-text">
        Shop for ₹4500 or more and avail ₹400 off your total! use code : <span className="highlight">CACAO</span>
        </h1>
      </Marquee>

      


    </div>
  );
};
