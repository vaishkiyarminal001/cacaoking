import React, { useState } from 'react';
import './Dummy.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import i1 from '../Assets/i1.png'; // Product Image 1
// import i2 from '../Assets/i2.png'; 
import i3 from '../Assets/i3.jpg'; 
import i4 from '../Assets/i4.jpg';

// Product details
const servicesData = [
  {
    id: 1,
    title: "Coffee Scrub",
    image: i1,
    // image2: i2,
    description: "Our Coffee Scrub is crafted with natural coffee grounds, rich in antioxidants to exfoliate and rejuvenate your skin.",
    salePrice: 731,
    regularPrice: 975,
    discount: 25,
    rating: 4.9,
    reviews: 111,
  },
  {
    id: 2,
    title: "Green Tea Mask",
    image: i3,
    image2: i4,
    description: "A rejuvenating mask that harnesses the power of green tea to detoxify and tighten the skin.",
    salePrice: 499,
    regularPrice: 650,
    discount: 23,
    rating: 4.8,
    reviews: 99,
  },
  // Additional products follow the same structure...
];

export const Dummy = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [cart, setCart] = useState([]); // State for the cart

  const openPopup = (service) => {
    setSelectedService(service);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedService(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  // Function to handle adding to cart
  const addToCart = () => {
    setCart((prevCart) => {
      // Add the selected product to the cart
      const newCart = [...prevCart, selectedService];
      toast.success(`${selectedService.title} added to cart!`);
      return newCart;
    });
  };

  return (
    <div className="d-svc-container">
      <div className="d-svc-tagline">
        <h1>Discover Our Products</h1>
        <p>Providing cutting-edge solutions tailored to your needs.</p>
      </div>

      {/* Cart Button */}
      <div className="d-cart-button">
        <button onClick={() => alert('Go to Cart')}>
          Cart ({cart.length})
        </button>
      </div>

      {/* Services Section */}
      <div className="d-svc-list">
        {servicesData.map((service) => (
          <div className="d-svc-card" key={service.id}>
            <div className="d-svc-img-wrapper">
              <img
                src={service.image}
                alt={service.title}
                className="d-svc-img"
                style={{ display: 'block' }}
              />
              <img
                src={service.image2}
                alt={`${service.title} Hover`}
                className="d-svc-img-hover"
              />
            </div>
            <h3>{service.title}</h3>
            <div className="d-price-details">
              <span className="d-sale-price">₹{service.salePrice}</span>
              <span className="d-regular-price">₹{service.regularPrice}</span>
              <span className="d-discount">({service.discount}% OFF)</span>
            </div>

            <div className="d-product-rating">
              <span>{service.rating} ⭐</span>
              <span>{service.reviews} Reviews</span>
            </div>

            <div className="d-button-86" role="button" onClick={() => openPopup(service)}>
              Read More
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {popupVisible && selectedService && (
        <div className="d-popup-overlay" onClick={handleOverlayClick}>
          <div className="d-popup">
            <button className="d-close-btn" onClick={closePopup}>X</button>
            <h2>{selectedService.title}</h2>
            <img src={selectedService.image} alt={selectedService.title} className="d-popup-img" />
            <p>{selectedService.description}</p>

            <div className="d-price-details">
              <span className="d-sale-price">₹{selectedService.salePrice}</span>
              <span className="d-regular-price">₹{selectedService.regularPrice}</span>
              <span className="d-discount">({selectedService.discount}% OFF)</span>
            </div>

            <div className="d-rating-reviews">
              <span className="d-rating">{selectedService.rating} ⭐</span>
              <span className="d-reviews">{selectedService.reviews} Reviews</span>
            </div>

            {/* Add to Cart Button */}
            <button className="d-add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      )}

      {/* ToastContainer for Notifications */}
      <ToastContainer />
    </div>
  );
};
