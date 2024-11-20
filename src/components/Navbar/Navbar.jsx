import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  
    const [menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <img src={assets.hunger_logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li className={menu==="Home"?"active":""}>Home</li>
        <li className={menu==="Menu"?"active":""}>Menu</li>
        <li className={menu==="Mobile-App"?"active":""}>Mobile-App</li>
        <li className={menu==="Contact Us"?"active":""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
        <img src={assets.basket_icon} alt="" />
        <div className="dot"></div>
      </div>
      <button>sign in</button>
    </div>
    </div>
  );
};

export default Navbar;
