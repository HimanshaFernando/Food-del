import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // Add item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Add or increment item count
    }));
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] <= 1) {
        // If the item count is 1 or less, remove it entirely
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      // Otherwise, decrement the count
      return {
        ...prev,
        [itemId]: prev[itemId] - 1,
      };
    });
  };

  // Calculate total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    // Loop through cart items
    for (const itemId in cartItems) {
      const quantity = cartItems[itemId];

      if (quantity > 0) {
        // Find the product in the food list
        const itemInfo = food_list.find((product) => product.id.toString() === itemId);

        if (itemInfo) {
          totalAmount += itemInfo.price * quantity; // Calculate the total for this item
        }
      }
    }

    return totalAmount;
  };

  // Context value to be provided
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
