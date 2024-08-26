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
        <div>
            <h1>Processors</h1>
            <ul>
                {processors.map((processor) => (
                    <li key={processor.id}>
                        <h2>{processor.model}</h2>
                        <p>Cores: {processor.cores}</p>
                        <p>Threads: {processor.threads}</p>
                        <p>Base Clock: {processor.baseClock} GHz</p>
                        <p>Boost Clock: {processor.boostClock} GHz</p>
                        <p>Price: {processor.price} din</p>
                        
                        {processor.imageUrl && <img className="imageSize" src={`http://localhost:3001/${processor.imageUrl}`} alt={`${processor.name} ${processor.model}`} /> }
                        
                        
                        
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Processors;