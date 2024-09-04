import React, { useEffect, useState } from "react";
import axios from "axios";

const Ssd = () => {

    const[ssd, setSsd] = useState([]);

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
    

    return(
        <div className="container">
            <h1>SSD discs</h1>
            <div className="row">
                {ssd.map((ssd) => (
                    <div key={ssd.id} className="col-md-4 mb-4">
                        <div>
                        {ssd.imageUrl && <img className="card-img-top img-fluid " src={`http://localhost:3001/${ssd.imageUrl}`} alt={`${ssd.name} ${ssd.model}`} />}
                        </div>
                        <div className="bard-body">
                            <h5 className="card-title">Model: {ssd.model}</h5>
                            <p className="card-text">Interface: {ssd.interface}</p>
                            <p className="card-text">Memory size: {ssd.memorySize}</p>
                            <p className="card-text">Writing speed: {ssd.writingSpeed}</p>
                            <p className="card-text">Reading speed: {ssd.readingSpeed}</p>
                            <p className="card-text">Price: {ssd.price}</p>
                            
                        </div>

                    </div>
                ))}

            </div>
            
        </div>
    )
}


export default Ssd;