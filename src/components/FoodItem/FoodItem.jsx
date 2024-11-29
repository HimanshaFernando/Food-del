import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../content/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const itemCount = cartItems[id] || 0; // Get the current count for this item

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {!itemCount ? (
          <img
            className="add"
            onClick={() => addToCart(id)} // Add item to cart
            src={assets.add_icon_white}
            alt="Add icon"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)} // Remove item from cart
              src={assets.remove_icon_red}
              alt="Remove icon"
            />
            <p>{itemCount}</p>
            <img
              onClick={() => addToCart(id)} // Add item to cart
              src={assets.add_icon_green}
              alt="Add icon"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;