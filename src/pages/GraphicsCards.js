import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../helpers/CartContext";

const GraphicsCards = () => {
    const[graphicsCards, setGraphicsCards] = useState([]);
    const{ addToCart } = useContext(CartContext);
    const [ sortType, setSortType ] = useState('price-asc');
    const [priceRange, setPriceRange ] = useState(250000);

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

    const sortProducts = (graphicsCards, sortType) => {
        let sortedGraphicCards = [...graphicsCards];
        if(sortType === 'price-asc'){
            sortedGraphicCards.sort((a, b) => a.price - b.price);
        }else if(sortType === 'price-desc'){
            sortedGraphicCards.sort((a, b) => b.price - a.price);
        }else if(sortType === 'name-asc'){
            sortedGraphicCards.sort((a, b) => a.model.localeCompare(b.model));
        }else if(sortType === 'name-desc'){
            sortedGraphicCards.sort((a, b) => b.model.localeCompare(a.model));
        }else if(sortType === 'memorySize-asc'){
            sortedGraphicCards.sort((a, b) => a.memorySize - b.memorySize);
        }
        else if(sortType === 'memorySize-desc'){
            sortedGraphicCards.sort((a, b) => b.memorySize - a.memorySize);
        }
        
        return sortedGraphicCards.filter((card) => card.price <= priceRange);
    }

   


    return(
        
        <div className="container my-4">
            <h1 className="text-center mb-4 mt-5">Graphics Cards</h1>
            <div className="row">
                <div className="col-md-6">
                <select onChange={(e) => setSortType(e.target.value)}>
                    <option value="price-asc">Sort by price(low to high)</option>
                    <option value="price-desc">Sort by price(high to low)</option>
                    <option value="name-asc">Sort by name (A-Z)</option>
                    <option value="name-desc">Sort by name (Z-A)</option>
                    <option value="memorySize-asc">Sort by memory size(low to high)</option>
                    <option value="memorySize-desc">Sort by memory size(high to low)</option>
                </select>

                </div>
                

                <div className="col-md-6 range-size">
                    <label>Max price: {priceRange}din</label>
                    <input
                        type="range"
                        className="form-range "
                        min='0'
                        max='250000'
                        step='5000'
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        style={{width: '200px'}}
                    />
                </div>
                {sortProducts(graphicsCards, sortType).map((graphicCard) => (
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
                        <button className="btn btn-primary mt-3 cart-button mt-auto" onClick={() => addToCart(graphicCard, 'graphicsCard')}>ADD TO CART</button>
                        

                        </div>
                        

                    </div>
                ))}

            </div>
            
        </div>
        
    )
}


export default GraphicsCards;