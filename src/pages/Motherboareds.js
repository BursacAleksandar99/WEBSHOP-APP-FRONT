import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../helpers/CartContext";

const Motherboards = () => {
    const[motherboards, setMotherboards] = useState([]);
    const { addToCart } = useContext(CartContext);
    const [ sortType, setSortType ] = useState('price-asc');
    const [ priceRange, setPriceRange ] = useState(50000);

    useEffect(() => {
        const fetchMotherboards = async() => {
            try{
                const response = await axios.get("http://localhost:3001/motherboards");
                setMotherboards(response.data);
            }catch(error){
                console.error("There was an error fetching the motherboards!", error);
            }
        };
        fetchMotherboards();
    }, []);

    const sortProducts = (motherboards, sortType) => {
        let sortedMotherboards = [...motherboards];
        if(sortType === 'price-asc'){
            sortedMotherboards.sort((a, b) => a.price - b.price);
        }else if(sortType === 'price-desc'){
            sortedMotherboards.sort((a, b) => b.price - a.price);
        }else if(sortType === 'memorySize-asc'){
            sortedMotherboards.sort((a, b) => a.maxMemory - b.maxMemory);
        }else if(sortType === 'memorySize-desc'){
            sortedMotherboards.sort((a, b) => b.maxMemory - a.maxMemory);
        }
        return sortedMotherboards.filter((motherboard) => motherboard.price <= priceRange);
    }

    return(
        <div className="container mt-4">
            <h1 className="text-center mb-4 mt-5">Graphics Cards</h1>
            <div className="row">
            <div className="col-md-6">
                    <select onChange={(e) => setSortType(e.target.value)}>
                        <option value="price-asc">Sort by price (low to high)</option>
                        <option value="price-desc">Sort by price (high to low)</option>
                        <option value="memorySize-asc">Sort by memory size (low to high)</option>
                        <option value="memorySize-desc">Sort by memory size (high to low)</option>
                        <option value="frequency-asc">Sort by frequency(low to high)</option>
                        <option value="frequency-desc">Sort by frequency(high to low)</option>
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
                {sortProducts(motherboards, sortType).map((motherboards) => (
                    <div key={motherboards.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card h-100">
                        <div className="img-container">
                            {motherboards.imageUrl && <img className="card-img-top img-fluid " src={`http://localhost:3001/${motherboards.imageUrl}`} alt={`${motherboards.name} ${motherboards.model}`} />}
                        </div>
                        <div className="bard-body">
                            <h5 className="card-title">{motherboards.model}</h5>
                            <p className="card-text">Memory Type: {motherboards.memoryType}</p>
                            <p className="card-text">Max Memory: {motherboards.maxMemory}GB</p>
                            <p className="card-text">Chipset: {motherboards.chipset}</p>
                            <p className="card-text">CPU: {motherboards.cpu}</p>
                            <p className="card-text">Price: {motherboards.price}din</p>
                        </div>
                        <button className="btn btn-primary mt-3 cart-button mt-auto" onClick={() =>addToCart(motherboards, 'motherboards')}>ADD TO CART</button>

                        </div>
                    

                </div>
                ))}

            </div>
            
        </div>
    )
}


export default Motherboards;
