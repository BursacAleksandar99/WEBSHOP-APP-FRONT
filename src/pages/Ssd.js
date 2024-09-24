import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../helpers/CartContext";

const Ssd = () => {

    const[ssd, setSsd] = useState([]);
    const { addToCart } = useContext(CartContext);
    const [ sortType, setSortType ] = useState('price-asc');
    const [ priceRange, setPriceRange ] = useState(50000);

    useEffect(() => {
        const fetchSsd = async() => {
            try{
                const response = await axios.get("http://localhost:3001/ssd");
                setSsd(response.data);
            }catch(error){
                console.error("There was an error fetching the ssd!");
            }
        }
        fetchSsd();
    }, []);

    const sortProducts = (ssds, sortType) => {
        let sortedSsds = [...ssds];
        if(sortType === 'price-asc'){
            sortedSsds.sort((a, b) => a.price - b.price);
        }else if(sortType === 'price-desc'){
            sortedSsds.sort((a, b) => b.price - a.price);
        }else if(sortType === 'memorySize-asc'){
            sortedSsds.sort((a, b) => a.memorySize - b.memorySize);
        }else if(sortType === 'memorySize-desc'){
            sortedSsds.sort((a, b) => b.memorySize - a.memorySize);
        }
        return sortedSsds.filter((ssd) => ssd.price <= priceRange);
    }
    

    return(
        <div className="container mt-4">
            <h1 className="text-center mb-4 mt-5">SSD discs</h1>
            <div className="row">
            <div className="col-md-6">
                    <select onChange={(e) => setSortType(e.target.value)}>
                        <option value="price-asc">Sort by price (low to high)</option>
                        <option value="price-desc">Sort by price (high to low)</option>
                        <option value="memorySize-asc">Sort by memory size (low to high)</option>
                        <option value="memorySize-desc">Sort by memory size (high to low)</option>
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
                {sortProducts(ssd, sortType).map((ssd) => (
                    <div key={ssd.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                        <div className="card h-100">
                            <div className="img-container">
                            {ssd.imageUrl && <img className="card-img-top img-fluid " src={`http://localhost:3001/${ssd.imageUrl}`} alt={`${ssd.name} ${ssd.model}`} />}
                            </div>
                        <div className="bard-body">
                            <h5 className="card-title">Model: {ssd.model}</h5>
                            <p className="card-text">Interface: {ssd.interface}</p>
                            <p className="card-text">Memory size: {ssd.memorySize}GB</p>
                            <p className="card-text">Writing speed: {ssd.writingSpeed}MB/s</p>
                            <p className="card-text">Reading speed: {ssd.readingSpeed}MB/s</p>
                            <p className="card-text">Price: {ssd.price}din</p>
                            
                        </div>
                        <button className="btn btn-primary mt-3 cart-button mt-auto" onClick={() =>addToCart(ssd, 'ssds')}>ADD TO CART</button>
                        </div>
                        

                    </div>
                ))}

            </div>
            
        </div>
    )
}


export default Ssd;




