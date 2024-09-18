import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../helpers/CartContext";

const Processors = () => {
    const [processors, setProcessors] = useState([]);
    const{ addToCart } = useContext(CartContext);
    const [ sortType, setSortType ] = useState('price-asc');



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

    const sortProducts = (processors, sortType) => {
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
        return sortedProcessors;
    };

    return(
    <div className="container my-4 ">
        <h1 className="text-center mb-4 mt-5">PROCESSORS</h1>
        <div className="row">
                <select onChange={(e) => setSortType(e.target.value)}>
                            <option value="price-asc">Sort by price (low to high)</option>
                            <option value="price-desc">Sort by price (high to low)</option>
                            <option value="name-asc">Sort by name (A-Z)</option>
                            <option value="name-desc">Sort by name (Z-A)</option>
                            <option value="cores-asc">Sort by core number(low to high)</option>
                            <option value="cores-desc">Sort by core number(high to low)</option>
                    </select>
                {sortProducts(processors, sortType).map((processor) => (
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
                        <button className="btn btn-primary mt-3 cart-button" onClick={() => addToCart(processor)}>ADD TO CART</button>
                        
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Processors;