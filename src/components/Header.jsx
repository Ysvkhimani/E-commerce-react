import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../assests/3bdbc5b3f55133aac50eb70e4c565618_t.jpg'


const Header = () => {
  return (
    <div className="container">
      <header>
      <div>
            <img src={Logo} alt="" className="logo" />
          </div>
        <nav>
          
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
          <div className="cart">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;