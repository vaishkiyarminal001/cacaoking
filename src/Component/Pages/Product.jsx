import React, { useState } from 'react';
import './Product.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import i1 from '../Assets/i1.png';
import i2 from '../Assets/i2.png';
import i3 from '../Assets/i3.jpg';
import i4 from '../Assets/i4.jpg';
import { Button86 } from './Button86';

// Product details with updated descriptions, benefits, and how to use
const servicesData = [
  {
    id: 1,
    title: "Coffee Scrub",
    image: i1,
    description: "Our Coffee Scrub is crafted with natural coffee grounds, rich in antioxidants to exfoliate and rejuvenate your skin. It removes dead skin cells and promotes circulation, leaving your skin smooth and glowing.",
    benefits: [
      "Exfoliates dead skin cells",
      "Improves blood circulation",
      "Helps reduce the appearance of cellulite",
      "Rich in antioxidants for youthful skin"
    ],
    howToUse: "Gently massage the scrub onto damp skin in circular motions for 2-3 minutes. Rinse thoroughly with warm water. Use 2-3 times a week for best results.",
    salePrice: 731,
    regularPrice: 975,
    discount: 25,
    rating: 4.9,
    reviews: 111,
  },
  {
    id: 2,
    title: "Glowing Oil",
    image: i2,
    description: "Our Glowing Oil is a nourishing blend of natural oils that deeply hydrate your skin, leaving it soft, smooth, and radiant. The formula is lightweight and non-greasy, perfect for a luminous glow.",
    benefits: [
      "Deeply hydrates and moisturizes skin",
      "Enhances skin's natural radiance",
      "Non-greasy formula for a soft finish",
      "Improves skin texture and elasticity"
    ],
    howToUse: "Apply a few drops of the oil onto your skin after showering, massaging it gently in circular motions. Can be used on the face, body, and hair for ultimate glow.",
    salePrice: 800,
    regularPrice: 1050,
    discount: 24,
    rating: 4.8,
    reviews: 102,
  },
  {
    id: 3,
    title: "Hair Serum",
    image: i3,
    description: "Our Hair Serum is a lightweight formula that nourishes and strengthens hair, providing a smooth, frizz-free finish. It helps to protect against heat damage and promotes healthy hair growth.",
    benefits: [
      "Reduces frizz and flyaways",
      "Protects hair from heat damage",
      "Nourishes and strengthens hair",
      "Promotes healthy hair growth"
    ],
    howToUse: "Apply a small amount of serum to damp hair, focusing on the ends. Style as desired. For added shine and smoothness, use on dry hair as well.",
    salePrice: 450,
    regularPrice: 600,
    discount: 25,
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 4,
    title: "Aromatic",
    image: i4,
    description: "Aromatic is a luxurious fragrance oil that uplifts the senses with a blend of calming and refreshing scents. Perfect for aromatherapy, it helps relieve stress and promote relaxation.",
    benefits: [
      "Calming and refreshing aroma",
      "Relieves stress and promotes relaxation",
      "Improves mood and mental clarity",
      "Ideal for aromatherapy and relaxation"
    ],
    howToUse: "Place a few drops in a diffuser to enjoy the soothing scent, or apply to pulse points for a calming effect throughout the day.",
    salePrice: 650,
    regularPrice: 850,
    discount: 23,
    rating: 4.9,
    reviews: 110,
  },
  {
    id: 1,
    title: "Coffee Scrub",
    image: i1,
    description: "Our Coffee Scrub is crafted with natural coffee grounds, rich in antioxidants to exfoliate and rejuvenate your skin. It removes dead skin cells and promotes circulation, leaving your skin smooth and glowing.",
    benefits: [
      "Exfoliates dead skin cells",
      "Improves blood circulation",
      "Helps reduce the appearance of cellulite",
      "Rich in antioxidants for youthful skin"
    ],
    howToUse: "Gently massage the scrub onto damp skin in circular motions for 2-3 minutes. Rinse thoroughly with warm water. Use 2-3 times a week for best results.",
    salePrice: 731,
    regularPrice: 975,
    discount: 25,
    rating: 4.9,
    reviews: 111,
  },
  {
    id: 2,
    title: "Glowing Oil",
    image: i2,
    description: "Our Glowing Oil is a nourishing blend of natural oils that deeply hydrate your skin, leaving it soft, smooth, and radiant. The formula is lightweight and non-greasy, perfect for a luminous glow.",
    benefits: [
      "Deeply hydrates and moisturizes skin",
      "Enhances skin's natural radiance",
      "Non-greasy formula for a soft finish",
      "Improves skin texture and elasticity"
    ],
    howToUse: "Apply a few drops of the oil onto your skin after showering, massaging it gently in circular motions. Can be used on the face, body, and hair for ultimate glow.",
    salePrice: 800,
    regularPrice: 1050,
    discount: 24,
    rating: 4.8,
    reviews: 102,
  },
  {
    id: 3,
    title: "Hair Serum",
    image: i3,
    description: "Our Hair Serum is a lightweight formula that nourishes and strengthens hair, providing a smooth, frizz-free finish. It helps to protect against heat damage and promotes healthy hair growth.",
    benefits: [
      "Reduces frizz and flyaways",
      "Protects hair from heat damage",
      "Nourishes and strengthens hair",
      "Promotes healthy hair growth"
    ],
    howToUse: "Apply a small amount of serum to damp hair, focusing on the ends. Style as desired. For added shine and smoothness, use on dry hair as well.",
    salePrice: 450,
    regularPrice: 600,
    discount: 25,
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 4,
    title: "Aromatic",
    image: i4,
    description: "Aromatic is a luxurious fragrance oil that uplifts the senses with a blend of calming and refreshing scents. Perfect for aromatherapy, it helps relieve stress and promote relaxation.",
    benefits: [
      "Calming and refreshing aroma",
      "Relieves stress and promotes relaxation",
      "Improves mood and mental clarity",
      "Ideal for aromatherapy and relaxation"
    ],
    howToUse: "Place a few drops in a diffuser to enjoy the soothing scent, or apply to pulse points for a calming effect throughout the day.",
    salePrice: 650,
    regularPrice: 850,
    discount: 23,
    rating: 4.9,
    reviews: 110,
  }
];

export const Product = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

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

  

 // Function to handle adding to cart and showing a toast notification
 const addToCart = () => {
  toast.success(`${selectedService.title} added to cart!`);
};

  return (
    <div className="svc-container">
      <div className="svc-tagline">
        <h1>Discover Our Products</h1>
        <p>Providing cutting-edge solutions tailored to your needs.</p>
      </div>

      {/* Services Section */}
      <div className="svc-list">
        {servicesData.map((service) => (
          <div className="svc-card" key={service.id}>
            <img src={service.image} alt={service.title} className="svc-img" />
            <h3>{service.title}</h3>
            <div className="price-details">
              <span className="sale-price">₹{service.salePrice}</span>
              <span className="regular-price">₹{service.regularPrice}</span>
              <span className="discount">({service.discount}% OFF)</span>
            </div>

            {/* Rating and Reviews on the card */}
            <div className="product-rating">
              <span>{service.rating} ⭐</span>
              <span>{service.reviews} Reviews</span>
            </div>

            <div className="button-86" role="button" onClick={() => openPopup(service)}>
              Read More
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {popupVisible && selectedService && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup">
            <button className="close-btn" onClick={closePopup}>X</button>
            <h2>{selectedService.title}</h2>
            <img src={selectedService.image} alt={selectedService.title} className="popup-img" />
            <p>{selectedService.description}</p>

            {/* Benefits */}
            <h3 className='benefit-text'>Benefits:</h3>
            <ul>
              {selectedService.benefits.map((benefit, index) => (
                <p key={index}>{benefit}</p>
              ))}
            </ul>

            {/* How to Use */}
            <h3 className='useMain'>How to Use:</h3>
            <p>{selectedService.howToUse}</p>

            {/* Price Details */}
            <div className="price-details">
              <span className="sale-price">₹{selectedService.salePrice}</span>
              <span className="regular-price">₹{selectedService.regularPrice}</span>
              <span className="discount">({selectedService.discount}% OFF)</span>
            </div>

            {/* Rating and Reviews in Popup */}
            <div className="rating-reviews">
              <span className="rating">{selectedService.rating} ⭐</span>
              <span className="reviews">{selectedService.reviews} Reviews</span>
            </div>

            {/* Add to Cart Button */}
            <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
              

      )}

      {/* ToastContainer for Notifications */}
      <ToastContainer />
      
    </div>
  );
};
