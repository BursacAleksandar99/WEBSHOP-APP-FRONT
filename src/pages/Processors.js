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
        <div className="container">
    <h1>Processors</h1>
    <div className="row">
        {processors.map((processor) => (
            <div key={processor.id} className="col-md-4 mb-4">
                <div className="card">
                    <div >
                    {processor.imageUrl && <img className="card-img-top img-fluid " src={`http://localhost:3001/${processor.imageUrl}`} alt={`${processor.name} ${processor.model}`} />}
                        </div>
                    
                    <div className="card-body">
                        <h5 className="card-title">{processor.model}</h5>
                        <p className="card-text">Cores: {processor.cores}</p>
                        <p className="card-text">Threads: {processor.threads}</p>
                        <p className="card-text">Base Clock: {processor.baseClock} GHz</p>
                        <p className="card-text">Boost Clock: {processor.boostClock} GHz</p>
                        <p className="card-text">Price: {processor.price} din</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
    )
}

export default Processors;