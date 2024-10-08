import React, { useState } from "react";
import axios from 'axios';

function Registration(){

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[errorMessage, setErrorMessage] = useState('');
    const[successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:3001/users/register', {
                username, password
            });
            setSuccessMessage('Registration successful!');
            setErrorMessage("");
            

        }catch(error){
            setErrorMessage("Error: " + error.response.data.error);
            setSuccessMessage("");
        }
    };
    return(
        <div className="registration-container mt-5 container">
            <h2>Register</h2>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
            {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label>Username:</label>
                    <input
                    type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required
                    />
                </div>
                <div className="form-group">
                <label>Password:</label>
                    <input
                    type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required
                    />
                </div>
                
                
                <button type="submit" className="btn btn-primary">Register</button>

            </form>
        </div>
    )
}

export default Registration;