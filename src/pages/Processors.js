import React, { useEffect, useState, useContext, useCallback } from "react";
import axios from "axios";
import { CartContext } from "../helpers/CartContext";

const Processors = () => {
    const [processors, setProcessors] = useState([]);
    const{ addToCart } = useContext(CartContext);
    const [ sortType, setSortType ] = useState('price-asc');
    const [priceRange, setPriceRange ] = useState(250000);
    const [selectedCores, setSelectedCores] = useState("");
    const [filteredProcessors, setFilteredProcessors] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);

    useEffect(() => {
        const fetchProcessors = async () => {
            try{
                const response = await axios.get("http://localhost:3001/processors");
                setProcessors(response.data);
            } catch(error) {
                console.error("There was an error fetching the processors!", error);
            }
        };
        fetchProcessors();
    }, []);

    useEffect(() => {
        
        let tempProcessors = [...processors];
        if(selectedCores !== ""){
            tempProcessors = tempProcessors.filter((processors) => 
            processors.cores === parseInt(selectedCores));
        }
        if(selectedBrand && typeof selectedBrand === "string"){
            tempProcessors = tempProcessors.filter((processors) => 
            processors.model.toLowerCase().includes(selectedBrand.toLowerCase()));
        }
        const sortedProcessors = sortProducts(tempProcessors, sortType);
        
        setFilteredProcessors(sortedProcessors);
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCores, selectedBrand, sortType, processors, ])

    const sortProducts = useCallback((processors, sortType) => {
        let sortedProcessors = [...processors];
        if (sortType === 'price-asc') {
            sortedProcessors.sort((a, b) => a.price - b.price);
        } else if (sortType === 'price-desc') {
            sortedProcessors.sort((a, b) => b.price - a.price);
        } else if (sortType === 'name-asc') {
            sortedProcessors.sort((a, b) => a.model.localeCompare(b.model));
        } else if (sortType === 'name-desc') {
            sortedProcessors.sort((a, b) => b.model.localeCompare(a.model));
        } else if(sortType === 'cores-asc'){
            sortedProcessors.sort((a, b) => a.cores - b.cores);
        }else if(sortType === 'cores-desc'){
            sortedProcessors.sort((a,b) => b.cores - a.cores);
        }
        return sortedProcessors.filter((processor) => processor.price <= priceRange);
    },[priceRange]);

    return(
    <div className="container my-4 ">
        <h1 className="text-center mb-4 mt-5">PROCESSORS</h1>
        <div className="row">
            <div className="col-md-4">
                <select onChange={(e) => setSortType(e.target.value)}>
                            <option value="price-asc">Sort by price (low to high)</option>
                            <option value="price-desc">Sort by price (high to low)</option>
                            <option value="name-asc">Sort by name (A-Z)</option>
                            <option value="name-desc">Sort by name (Z-A)</option>
                            <option value="cores-asc">Sort by core number(low to high)</option>
                            <option value="cores-desc">Sort by core number(high to low)</option>
                    </select>

            </div>
            <div className="col-md-4 range-size">
                    <label>Max price: {priceRange}din</label>
                    <input
                        type="range"
                        className="form-range"
                        min='0'
                        max='250000'
                        step='5000'
                        value={priceRange}
                        onChange={(e) => setPriceRange(Number(e.target.value))}
                        style={{width: '200px'}}
                    />
            </div>
            <div className="col-md-4">
                <label>CORES:</label><select onChange={(e) => setSelectedCores(e.target.value)}>
                        <option value="">All</option>
                        <option value="4">4 cores</option>
                        <option value="6">6 cores</option>
                        <option value="8">8 cores</option>
                        <option value="12">12 cores</option>
                </select>
                <select onChange={(e) => setSelectedBrand(e.target.value)}>
                    <option value="">All brands</option>
                    <option value="Intel">Intel</option>
                    <option value="Ryzen">Ryzen</option>
                </select>
                

            </div>
                
                {sortProducts(filteredProcessors, sortType).map((processor) => (
                <div key={processor.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    
                    <div className="card h-100">
                        <div className="img-container">
                            {processor.imageUrl && <img className="card-img-top img-fluid " src={`http://localhost:3001/${processor.imageUrl}`} alt={`${processor.name} ${processor.model}`} />}
                        </div>
                    
                        <div className="card-body">
                        <h5 className="card-title">{processor.model}</h5>
                        <p className="card-title">Cores: {processor.cores}</p>
                        <p className="card-title">Threads: {processor.threads}</p>
                        <p className="card-title">Base Clock: {processor.baseClock} GHz</p>
                        <p className="card-title">Boost Clock: {processor.boostClock} GHz</p>
                        <p className="card-title">Price: {processor.price}din</p>
                        </div>
                        <button className="btn btn-primary mt-3 cart-button" onClick={() => addToCart(processor, 'processor')}>ADD TO CART</button>
                        
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Processors;