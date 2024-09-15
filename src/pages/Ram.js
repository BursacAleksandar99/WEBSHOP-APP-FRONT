import React, { useEffect, useState } from "react";
import axios from "axios";

const Ram = () => {

    const[ram, setRam] = useState([]);

    useEffect(() => {
        const fetchRam = async() => {
            try{
                const response = await axios.get("http://localhost:3001/ram");
                setRam(response.data);
            }catch(error){
                console.error("There was an error fetching the ram!", error);
            }
        }
        fetchRam();
        
    }, []);

    return(
        <div className="container mt-5">
            <h1>Ram memory</h1>
            <div className="row">
                {ram.map((ram) => (
                    <div key={ram.id} className="col-md-4 mb-4">
                        <div>
                        {ram.imageUrl && <img className="card-img-top img-fluid " src={`http://localhost:3001/${ram.imageUrl}`} alt={`${ram.name} ${ram.model}`} />}
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Model: {ram.model}</h5>
                            <p className="card-text">Memory size: {ram.memorySize}GB</p>
                            <p className="card-text">Memory type: {ram.memoryType}</p>
                            <p className="card-text">Frequency: {ram.frequency}Mhz</p>
                            <p className="card-text">Price: {ram.price}din</p>
                            
                        </div>

                    </div>
                ))}

            </div>
            
        </div>
    )
}


export default Ram;