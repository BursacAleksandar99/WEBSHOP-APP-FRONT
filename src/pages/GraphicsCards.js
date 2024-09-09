import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../helpers/CartContext";

const GraphicsCards = () => {
    const[graphicsCards, setGraphicsCards] = useState([]);
    const{ addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchGraphicsCards = async() => {
            try{
                const response = await axios.get("http://localhost:3001/graphicsCards");
                setGraphicsCards(response.data);
            }catch(error){
                console.error("There was an error fetching the graphics cards!", error);
            }
        };
        fetchGraphicsCards();
    }, []);

   


    return(
        <div className="container my-4">
            <h1 className="text-center mb-4">Graphics Cards</h1>
            <div className="row">
                {graphicsCards.map((graphicCard) => (
                    <div key={graphicCard.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100">
                        <div className="img-container">
                        {graphicCard.imageUrl && <img className="card-img-top img-fluid " src={`http://localhost:3001/${graphicCard.imageUrl}`} alt={`${graphicCard.name} ${graphicCard.model}`} />}
                        </div>
                        <div className="bard-body">
                            <h5 className="card-title">{graphicCard.model}</h5>
                            <p className="card-text">Memory Size: {graphicCard.memorySize}GB</p>
                            <p className="card-text">Memory Type: {graphicCard.memoryType}</p>
                            <p className="card-text">Base Clock: {graphicCard.baseClock}MHz</p>
                            <p className="card-text">Boost Clock: {graphicCard.boostClock}MHz</p>
                            <p className="card-text">TDP: {graphicCard.tdp}W</p>
                            <p className="card-text">Price: {graphicCard.price}din</p>
                        </div>
                        <button className="btn btn-primary mt-3 cart-button" onClick={() => addToCart(graphicCard)}>ADD TO CART</button>
                        

                        </div>
                        

                    </div>
                ))}

            </div>
            
        </div>
    )
}


export default GraphicsCards;