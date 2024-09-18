import React, { useContext, useState } from "react";  
import { CartContext } from "../helpers/CartContext";

function Cart(){

    const { cartItems } = useContext(CartContext);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
    return(
        <div className="mt-5">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ?(
                <p>Your cart is empty</p>
            ) : (
                <>
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>  
                        <img
                            src={`http://localhost:3001/${item.imageUrl}`}
                            alt={`${item.name}`}
                            style={{ width: '100px', height: '100px' }} 
                        /> 
                            {item.name} - {item.quantity} X {item.price} din
                        </li>
                    ))}
                </ul>
                <h3>Total price: {totalPrice} din</h3>
                </>
            )}
        </div>
    )
}

export default Cart;