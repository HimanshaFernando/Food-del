import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../content/StoreContext";

const PlaceOrder = () => {
  const { cartItems, food_list } = useContext(StoreContext);

  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
  });

  // State for order type (Delivery or Pickup)
  const [orderType, setOrderType] = useState("Delivery"); // Default to "Delivery"

  // Calculate Subtotal
  const subtotal = food_list.reduce((acc, item) => {
    const quantity = cartItems[item._id] || 0;
    return acc + item.price * quantity;
  }, 0);

  // Conditional Delivery Fee
  const deliveryFee = orderType === "Delivery" && subtotal > 0 ? 2 : 0;

  // Calculate Total
  const total = subtotal + deliveryFee;

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      (orderType === "Delivery" && (!formData.street || !formData.city))
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    alert(`Order placed successfully for ${formData.firstName}!`);
    // Add logic to send data to backend or handle it accordingly
  };

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      {/* Order Type Toggle */}
      
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />

        {/* Conditionally render address fields based on order type */}
        {orderType === "Delivery" && (
          <div className="multi-fields">
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={formData.street}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>
        )}
      </div>

      <div className="cart-total">
        <h2>Cart Totals</h2>

        {/* Order Type Toggle Inside Cart Totals */}
        <div className="order-type">
          <button
            type="button"
            className={orderType === "Delivery" ? "active" : ""}
            onClick={() => setOrderType("Delivery")}
          >
            Delivery
          </button>
          <button
            type="button"
            className={orderType === "Pickup" ? "active" : ""}
            onClick={() => setOrderType("Pickup")}
          >
            Shop Pickup
          </button>
        </div>

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
        <button type="submit">Place Order</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
