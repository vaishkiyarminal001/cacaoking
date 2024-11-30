import React from 'react';
import { useCart } from './CartContext'; // Import the custom hook

export const Cart = () => {
  const { cart } = useCart(); // Access the cart state from CartContext

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <h3>{item.title}</h3>
              <img src={item.image} alt={item.title} className="cart-item-img" />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
