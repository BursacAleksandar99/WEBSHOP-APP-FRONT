import React, { useEffect, useState } from "react";
import axios from "axios";

const PowerSupply = () => {

    const[powerSupply, setPowerSupply] = useState([]);

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

    return(
        <div className="container mt-5">
            <h1>Ram memory</h1>
            <div className="row">
                {powerSupply.map((powerSupply) => (
                    <div key={powerSupply.id} className="col-md-4 mb-4">
                        <div>
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

                    </div>
                ))}

            </div>
            
        </div>
    )
}


export default PowerSupply;