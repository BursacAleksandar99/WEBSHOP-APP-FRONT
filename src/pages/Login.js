import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/users/login', {username, password}).then(response => {
        localStorage.setItem('token', response.data.token);
        console.log('Login successful', response.data);

        navigate('/');
        window.location.reload();
        
    })
    .catch(error => {
        setError('Error logging in: ' + error.message);
        console.error('Error loggin in:', error);
    })
    }

    return(
        <div className="mt-5 container">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    );
}


export default Login;