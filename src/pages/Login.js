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
    //     <div className="mt-5 container">
    //   <h1>Login Page</h1>
    //   <form onSubmit={handleLogin}>
    //     <div>
    //       <label htmlFor="username">Username:</label>
    //       <input
    //         type="text"
    //         id="username"
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)}
    //         placeholder="Enter your username"
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         type="password"
    //         id="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder="Enter your password"
    //         required
    //       />
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    //   {error && <p style={{ color: 'red' }}>{error}</p>}
    // </div>
    <div className=" login-div0 col-12 row">

      <div className="login-div1 col-lg-6 col-sm-12 ">
        
        <div className="login-div1-2">
            <p>Do you want a new gaming computer?</p>
              <p>You're in the right place!</p>
          </div>
        <div className="login-div1-1">
          <img src="https://res.cloudinary.com/djdzumd6m/image/upload/v1728577955/DALL_E_2024-10-10_18.29.47_-_A_minimalist_illustration_of_a_man_sitting_at_a_computer_desk_playing_video_games_with_a_dark_gray_343A40_background_and_the_man_in_pure_white_-fotor-bg-remover-20241010183134_jlsnic.png" alt="guy plaing games xD"/>

        </div>
        <div className="login-div-1-3">
            <h1>WELCOME BACK TO BURSAC IT SHOP!</h1>
        </div>
        
      </div>


      
      <div className="login-div2 col-lg-6 col-sm-12 ">
      
      </div>

    </div>
    );
}


export default Login;