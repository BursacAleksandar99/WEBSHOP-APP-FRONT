import React, { useContext, useState } from "react";  
import { CartContext } from "../helpers/CartContext";

function Cart(){

    const { cartItems } = useContext(CartContext);
    return(
        <div className="mt-5">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ?(
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>      
                            {item.name} - {item.quantity} X {item.price} din
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Cart;