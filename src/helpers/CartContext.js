import React, { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const[cartItems, setCartItems] = useState([])

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if(storedCartItems){
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    


    const addToCart = (product, category) => {
        setCartItems((prevItems) => {
            const uniqueKey = `${category}-${product.id}`;
            const itemInCart = prevItems.find(item => item.uniqueKey === uniqueKey)

            let updatedCart;
            if(itemInCart){
                updatedCart = prevItems.map(item => 
                    item.uniqueKey === uniqueKey ? {...item, quantity: item.quantity + 1} : item
                );
            }else{ 
                updatedCart = [...prevItems, {...product, quantity: 1, uniqueKey, category}];
            }
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;
        })
        
        // setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (uniqueKey) => {
        setCartItems((prevItems) => {const updatedCart =prevItems.filter(item => item.uniqueKey !== uniqueKey)
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            return updatedCart;
        });
        
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}