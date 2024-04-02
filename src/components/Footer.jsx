import React from 'react';
import { useCart } from '../context/CartContext';

const Footer = () => {
  const { cart } = useCart();

  const totalItems = cart.length;

  const { getTotalCost } = useCart();
  const totalCost = getTotalCost();

  return (
    <div className="container">
    <footer>
      <div>&copy; 2024 All right reserved to Anglara Digital solution </div>

      <div>Total Items: {totalItems} <br />
      Total Cost: ${totalCost.toFixed(2)}
      </div>
    
    </footer>
    </div>
  );
};

export default Footer;
