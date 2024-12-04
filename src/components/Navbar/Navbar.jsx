import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar">
      {/* Logo */}
      <Link to="/">
        <img src={assets.hunger_logo} alt="Hunger Logo" className="logo" />
      </Link>

      {/* Hamburger Menu */}
      <div
        className="menu-toggler"
        onClick={() => setMenuOpen((prevState) => !prevState)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Menu Items */}
      <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
        <li onClick={() => setMenu("Home")}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setMenu("Menu")}>
          <Link to="/ExploreMenu">Menu</Link>
        </li>
        <li onClick={() => setMenu("Mobile-App")}>
          <Link to="/AppDownload">Mobile App</Link>
        </li>
        <li onClick={() => setMenu("Contact Us")}>
          <Link to="/Footer">Contact Us</Link>
        </li>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="Basket Icon" />
          </Link>
          <div className="dot"></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
