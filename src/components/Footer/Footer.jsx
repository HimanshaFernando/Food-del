import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        {/* Left section with logo, text, and social icons */}
        <div className="footer-content-left">
          <img src={assets.hunger_logo} alt="Hunger Logo" />
          <p>
            "At HUNGER, we are committed to delivering the freshest ingredients and the most flavorful dishes to your table. Whether you’re dining in or enjoying our food at home, we strive to provide an unforgettable experience. Thank you for choosing us – we look forward to serving you again!"
          </p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt="Facebook Icon" />
            <img src={assets.twitter_icon} alt="Twitter Icon" />
            <img src={assets.linkedin_icon} alt="LinkedIn Icon" />
          </div>
        </div>

        {/* Middle section for Company links */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right section for Contact details */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+94 00 00 00 000</li>
            <li>contact@hunger.com</li>
          </ul>
        </div>
      </div>

      {/* Footer copyright */}
      <hr />
      <p className="foot-copyright">Copyright 2024 @ Hunger.com - All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
