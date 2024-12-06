import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import { NavLink } from 'react-router-dom'; // Using NavLink for active class support

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Product', path: '/product' },
    { title: 'Training', path: '/training' },
    { title: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="nav">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        {pages.map((item, index) => (
          <NavLink
            key={index} // Corrected placement of `key`
            to={item.path} // Properly placed `to` attribute
            className={({ isActive }) => (isActive ? 'active-link' : '')} // Dynamically set active class
            onClick={() => setIsOpen(false)} // Close menu on link click
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};
