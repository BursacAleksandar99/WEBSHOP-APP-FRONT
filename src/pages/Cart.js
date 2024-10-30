import React, { useContext, useEffect, useState } from "react";  
import { CartContext } from "../helpers/CartContext";
import axios from "axios";
import {jwtDecode} from "jwt-decode"

function Cart(){

    const { cartItems, removeFromCart } = useContext(CartContext);
    const calculatedTotalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);


    useEffect(() => {
        console.log(cartItems);
        console.log(calculatedTotalPrice);
       
        
        
        
    }, []);
    
    

    const getUserIdFromToken = () => {
        const token = localStorage.getItem("token");
        // console.log(token);
        if(!token){
            return null
        }else{  
            const decoded = jwtDecode(token);
            console.log(decoded);
            
            console.log(decoded.id);
            
            return decoded.id;
            
            

        }

        
    }
    const handleOrderSubmit = async() => {
        try{
            const totalPrice = calculatedTotalPrice;
            
            const userId = getUserIdFromToken();

            console.log(cartItems);
            console.log("User: ", userId);
            console.log("Total price: ", totalPrice);
            console.log("cartItems: ", typeof cartItems, " total price ", typeof totalPrice, ", user ", typeof userId);
            
            
            
            const response = await axios.post("http://localhost:3001/orders/create-order", {
                userId,
                items: JSON.stringify(cartItems),
                totalPrice,
            })
            console.log(response.data.message);
            
            
            removeFromCart();
        }catch(error){
            console.error("Faild to submit order!", error);
        }
    }
    return(
        <div className="mt-5 container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ?(
                <p>Your cart is empty</p>
            ) : (
                <>
                <ul>
                    {cartItems.map(item => (
                        <li key={item.uniqueKey}>  
                        <img
                            src={`http://localhost:3001/${item.imageUrl}`}
                            alt={`${item.name}`}
                            style={{ width: '100px', height: '100px' }} 
                        /> 
                    
                            {item.name} {item.model} - {item.quantity} X {item.price} din
                            <button className="btn btn-primary" onClick={() => removeFromCart(item.uniqueKey)}>Delete item</button>
                        </li>
                    ))}
                </ul>
                <h1>{calculatedTotalPrice}</h1>
                <button onClick={handleOrderSubmit}>Place Order</button>
                
                
                </>
            )}
        </div>
    )
}

export default Cart;