import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../helpers/CartContext";

const PowerSupply = () => {

    const[powerSupply, setPowerSupply] = useState([]);
    const { addToCart } = useContext(CartContext);
    const [ sortType, setSortType ] = useState('price-asc');
    const [ priceRange, setPriceRange ] = useState(50000);

    useEffect(() => {
        const fetchPowerSupply = async() => {
            try{
                const response = await axios.get("http://localhost:3001/powerSupply");
                setPowerSupply(response.data);
            }catch(error){
                console.error("There was an error fetching the Power Supply!");
            }
        }
        fetchPowerSupply();
    })

    const sortProducts = (powerSupplys, sortType) => {
        let sortedPowerSupplys = [...powerSupplys];
        if(sortType === 'price-asc'){
            sortedPowerSupplys.sort((a, b) => a.price - b.price);
        }else if(sortType === 'price-desc'){
            sortedPowerSupplys.sort((a, b) => b.price - a.price);
        }
        return sortedPowerSupplys.filter((powerSupply) => powerSupply.price <= priceRange);
    }

    return(
        <div className="container mt-4">
            <h1 className="text-center mb-4 mt-5">Ram memory</h1>
            <div className="row">
                <div className="col-md-6">
                    <select onChange={(e) => setSortType(e.target.value)}>
                        <option value="price-asc">Sort by price (low to high)</option>
                        <option value="price-desc">Sort by price (high to low)</option>
                    </select>
                </div>
                <div className="col-md-6 range-size">
                    <label>Max price: {priceRange}din</label>
                    <input
                        type="range"
                        className="form-range"
                        min='0'
                        max='50000'
                        step='2000'
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        style={{width: '200px'}}
                    />
            </div>
                {sortProducts(powerSupply, sortType).map((powerSupply) => (
                    <div key={powerSupply.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100">
                            <div className="img-container">
                                {powerSupply.imageUrl && <img className="card-img-top img-fluid " src={`http://localhost:3001/${powerSupply.imageUrl}`} alt={`${powerSupply.name} ${powerSupply.model}`} />}
                            </div>
                        <div className="bard-body">
                            <h5 className="card-title">Model: {powerSupply.model}</h5>
                            <p className="card-text">Width: {powerSupply.width}cm</p>
                            <p className="card-text">Height: {powerSupply.height}cm</p>
                            <p className="card-text">Deep: {powerSupply.deep}cm</p>
                            <p className="card-text">Certificate: {powerSupply.certificate}</p>
                            <p className="card-text">Price: {powerSupply.price}din</p>
                            
                        </div>
                        <button className="btn btn-primary mt-3 cart-button mt-auto">ADD TO CART</button>
                        </div>
                        

                    </div>
                ))}

            </div>
            
        </div>
    )
}


export default PowerSupply;