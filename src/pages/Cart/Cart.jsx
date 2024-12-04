import React, { useContext, useState } from "react";
import "./Cart.css";
import { StoreContext } from "../../content/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const [promoCode, setPromoCode] = useState(""); // Promo code state

  const navigate = useNavigate();

  // Calculate Subtotal
  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems[item._id] || 0;
    return acc + item.price * quantity;
  }, 0);

  // Delivery Fee
  const deliveryFee = subtotal > 0 ? 2 : 0;

  // Calculate Total
  const total = subtotal + deliveryFee;

  // Handle Promo Code Submission
  const handlePromoCodeSubmit = () => {
    alert(`Promo Code Applied: ${promoCode}`);
    // Add your promo code logic here
  };

  return (
    <div className="cart">
      <div className="cart-items">
        {/* Cart Header */}
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

        {/* Cart Items */}
        {food_list.map((item) => {
          const quantity = cartItems[item._id];
          if (quantity > 0) {
            return (
              <div key={item._id} className="cart-items-title cart-items-item">
                <p>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                </p>
                <p>{item.name}</p>
                <p>${item.price.toFixed(2)}</p>
                <p>{quantity}</p>
                <p>${(item.price * quantity).toFixed(2)}</p>
                <p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="remove-button"
                  >
                    Remove
                  </button>
                </p>
              </div>
            );
          }
          return null; // Skip items with 0 quantity
        })}
      </div>

      {/* Cart Bottom Section */}
      <div className="cart-bottom">
        {/* Cart Total */}
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${total.toFixed(2)}</b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
        </div>

        {/* Promo Code Section */}
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, enter it here:</p>
            <div className="cart-promocode-input">
              <input
                type="text"
                placeholder="Promo Code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button onClick={handlePromoCodeSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
