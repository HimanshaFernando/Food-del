import { createContext, useEffect, useState } from "react";
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

    useEffect(() => {
        console.log(cartItems); // Check the cart items whenever they change
    }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
