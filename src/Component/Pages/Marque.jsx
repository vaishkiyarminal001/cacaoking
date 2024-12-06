import React from 'react';
import "./Marque.css";
import Marquee from 'react-fast-marquee';

export const Marque = () => {
  return (
    <div className='marque-main'>
      <Marquee 
        direction="left" 
        speed={40} 
        delay={10} 
        style={{ height: '50px', width: '100%', margin: 'auto' }}
      >
        <h1 className="marquee-text">
        Free shipping on orders over ₹3000 in the <span className="highlight">India</span>
        </h1>

        <h1 className="marquee-text">
        Free shipping on orders over ₹3000 in the <span className="highlight">India</span>
        </h1>

        <h1 className="marquee-text">
        Free shipping on orders over ₹3000 in the <span className="highlight">India</span>
        </h1>

        <h1 className="marquee-text">
        Free shipping on orders over ₹3000 in the <span className="highlight">India</span>
        </h1>

        <h1 className="marquee-text">
        Free shipping on orders over ₹3000 in the <span className="highlight">India</span>
        </h1>
      </Marquee>

      


    </div>
  );
};
