import React, { useEffect, useState } from "react";
import axios from "axios";

const Processors = () => {
    const [processors, setProcessors] = useState([]);



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

    return(
    <div className="container my-4">
        <h1 className="text-center mb-4">Processors</h1>
        <div className="row">
            {processors.map((processor) => (
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
                        <button className="btn btn-primary mt-3">Dodaj u korpu</button>
                        
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Processors;