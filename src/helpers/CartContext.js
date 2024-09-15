import React, { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const[cartItems, setCartItems] = useState([])


    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemInCart = prevItems.find(item => item.id === product.id)

            if(itemInCart){
                return prevItems.map(item => 
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                );
            }else{ 
                return [...prevItems, {...product, quantity: 1}];
            }
        })
        // setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}