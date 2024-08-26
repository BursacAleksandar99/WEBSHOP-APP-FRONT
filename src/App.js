import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Processors from './pages/Processors';
import Login from './pages/Login';
import Registration from './pages/Registration';
import PrivateRoute from './components/PrivateRoute';
import { AuthContext } from './helpers/AuthContext';
import { useState, useEffect,   } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import GraphicCard from './pages/GraphicCards';
import Ram from './pages/Ram';
import Motherboards from './pages/Motherboareds';
import Ssd from './pages/Ssd';
import PowerSupply from './pages/PowerSupply';




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
                      <Dropdown>
                        <Dropdown.Toggle variant='light' id='dropdown-basic'>
                          Components
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to='/processors'>Processors</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/graphicCards'>GraphicCards</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/ram'>RAM</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/motherBoards'>Motherboards</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/ssd'>Ssd discs</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/ps'>Power Supply</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

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
              <Route path='/processors' exact Component={Processors}/>
              <Route path='/graphicCards' exact Component={GraphicCard}/>
              <Route path='/ram' exact Component={Ram}/>
              <Route path='/motherBoards' exact Component={Motherboards}/>
              <Route path='/ssd' exact Component={Ssd}/>
              <Route path='/ps' exact Component={PowerSupply}/>
              <Route path='/login' exact Component={Login}/>
              <Route path='/registration' exact Component={Registration}/>
            </Routes>
          </Router>

      </AuthContext.Provider>
          
    </div>
  );
}

export default App;
