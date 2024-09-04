import React, { useEffect, useState } from "react";
import axios from "axios";

const Motherboards = () => {
    const[motherboards, setMotherboards] = useState([]);

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
    return(
        <div className="container">
            <h1>Graphics Cards</h1>
            <div className="row">
                {motherboards.map((motherboards) => (
                    <div key={motherboards.id} className="col-md-4 mb-4">
                        <div>
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

                    </div>
                ))}

            </div>
            
        </div>
    )
}


export default Motherboards;