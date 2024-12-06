import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import c1 from '../Assets/c1.jpeg';
import c2 from '../Assets/c2.jpg';
import c3 from '../Assets/c3.webp';
import c4 from '../Assets/c4.webp';
import c5 from '../Assets/c5.jpg';
import c6 from '../Assets/c6.webp';
import c7 from '../Assets/c7.webp';

import './Carousels.css'; 

export const Carousels = () => {
  return (
    <div className="carousel-container">
      <Carousel interval={5000} pause={false}>
        <Carousel.Item>
          <img className="carousel-image" src={c1} alt="SEO" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={c2} alt="Social Media" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={c3} alt="Code" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={c4} alt="Code" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={c5} alt="Code" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={c6} alt="Code" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-image" src={c7} alt="Code" />
        </Carousel.Item>
       
      </Carousel>
    </div>
  );
};
