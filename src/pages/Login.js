import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";


function Login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);


    const toggleView = () => {
      setShowLogin(prevState => {
        // console.log("New state:", !prevState);
        return !prevState; });
    }

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
    <div className=" login-div0 col-12 row">
      <div className={`login-div1 ${showLogin ? "hidden-login-div2" : ""} col-lg-6 col-sm-12 `}>
      
        
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
        <button className="btn-proceed-login" onClick={toggleView}>Preceed to login</button>
        
      </div>


      
      <div className={`login-div2 ${showLogin ? "show-login-div2" : "hidden-login-div2" } col-lg-6 col-sm-12 `}>
        <div className="login-div2-1">
        
       <form onSubmit={handleLogin} className="login-div2-2">
        <h2>Welcome back</h2>
         <div className="login-div2-3">
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
         <div className="login-div2-3">
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
         <div>
          <div className="login-div2-4">
              <label>Forgot password?</label>
          </div>
          <button className="btn-login" type="submit">Login</button>
         </div>
         <div className="login-div2-4">
              <label>Don't have an account?</label>
              <label>
                <Link to="/registration">Sing up</Link>
              </label>
         </div>
         
         
       </form>
       {/* <button onClick={toggleView}>Preceed to login</button> */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
          

        </div>
      
      </div>

    </div>
    );
}


export default Login;