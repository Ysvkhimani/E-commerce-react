import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="container">
      <div className="main">
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                console.log('Cart items:', cart);
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
