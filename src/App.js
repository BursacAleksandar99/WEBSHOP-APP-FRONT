import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Registration from './pages/Registration';
import PrivateRoute from './components/PrivateRoute';
import { AuthContext } from './helpers/AuthContext';
import { useState, useEffect,   } from 'react';




function App() {

  const [authState, setAuthState] = useState({
    username: "", 
    id: 0, 
    status: false
  });
  
  useEffect(() =>{
             const token = localStorage.getItem('token');
             if(token){
                 setAuthState({status: true, username: 'someUser', id: 1});
             } 
 }, []);
 const handleLogout = () => {
  localStorage.removeItem('token');
  setAuthState({status: false, username: '', id: 0});
 }
  return (
    
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
      <Router>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>BURSAC IT SHOP</Link>
                
                <div className='collapse navbar-collapse' id='navbarNav'>
                  <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link className='nav-link' to='/'>Home</Link>
                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link' to='/about'>About</Link>

                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link' to='/login'>Login</Link>

                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link' to='/registration'>Registration</Link>

                    </li>
                    {authState.status && <button onClick={handleLogout}>Logout</button>}

                  </ul>

                </div>
              </div>
              
            </nav>
            <Routes>
              <Route path='/' exact Component={Home}/>
              <Route path='/contact' exact Component={Contact}/>
              <Route path='/about' exact Component={() => (<PrivateRoute>
                <About/>
              </PrivateRoute>)}/>
              <Route path='/login' exact Component={Login}/>
              <Route path='/registration' exact Component={Registration}/>
            </Routes>
          </Router>

      </AuthContext.Provider>
          
    </div>
  );
}

export default App;
