import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Registration(){

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[email, setEmail] = useState('');
    const[errorMessage, setErrorMessage] = useState('');
    const[successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:3001/users/register', {
                username, password, email
            });
            setSuccessMessage('Registration successful!');
            setErrorMessage("");
            

        }catch(error){
            setErrorMessage("Error: " + error.response.data.error);
            setSuccessMessage("");
        }
    };
    return(
        // <div className="registration-container mt-5 container">
        //     
        // </div>
        <div className="reg-div0 col-lg-12 col-sm-12">
            <div className="reg-div1">
                    <h1>Register</h1>
            </div>
                
            <div className="reg-div2">
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
             {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
             <form className="reg-form"  onSubmit={handleSubmit}>
                 <div className="form-group reg-label">
                    <label>Email:</label>
                     <input
                     type="text" className="reg-input" value={email} onChange={(e) => setEmail(e.target.value)} required
                     />
                 </div>

                 <div className="form-group reg-label">
                 <label>Username:</label>
                     <input
                     type="text" className="reg-input" value={username} onChange={(e) => setUsername(e.target.value)} required
                     />
                 </div>
                 <div className="form-group reg-label">
                    
                 <label>Password:</label>
                     <input
                     type="password" className="reg-input" value={password} onChange={(e) => setPassword(e.target.value)} required
                     />
                 </div>
                    <div className="reg-acc">
                        <label>Already registered?</label>
                        <label>
                        <Link to="/login">Login</Link>
                        </label>
                    </div>
                
                
                 <button type="submit" className="reg-btn">Register</button>

             </form>

            </div>
             

            

        </div>
    )
}

export default Registration;