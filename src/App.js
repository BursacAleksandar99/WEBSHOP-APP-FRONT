import './App.css';
import {BrowserRouter as Router, Route, Routes, Link, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Processors from './pages/Processors';
import Login from './pages/Login';
import Registration from './pages/Registration';
import PrivateRoute from './components/PrivateRoute';
import { AuthContext } from './helpers/AuthContext';
import { useState, useEffect,   } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import GraphicsCards from './pages/GraphicsCards';
import Ram from './pages/Ram';
import Motherboards from './pages/Motherboareds';
import Ssd from './pages/Ssd';
import PowerSupply from './pages/PowerSupply';
import Footer from './pages/Footer';
import { CartProvider } from './helpers/CartContext';
import Cart from './pages/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import AllComponents from './pages/AllComponents';





function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

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

  // const location = useLocation();

  // const isHomeOrContact = location.pathname === '/' || location.pathname === '/contact';
  return (
    
    <div className='App'>
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <CartProvider>
      <Router>
            <nav  className='navbar navbar-expand-lg navbar-light nav-menu-color fixed-top'>
              <div className='container-fluid'>
                <Link className='navbar-brand text-white' to='/'>BURSAC IT SHOP</Link>

               <button 
               className="navbar-toggler custom-toggler" 
               type="button" 
               data-bs-toggle="collapse" 
               data-bs-target="#navbarNav" 
               aria-controls="navbarNav" 
               aria-expanded={isOpen} 
               aria-label="Toggle navigation" 
               onClick={toggleNavbar}>
                        <span className="navbar-toggler-icon"></span>
                </button> 
                
                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
                  <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <Link className='nav-link text-white' to='/' onClick={closeNavbar}>Home</Link>
                    </li>
                    <li className='nav-item'>
                      <Dropdown>
                        <Dropdown.Toggle variant='light' id='dropdown-basic' className='custom-toggle'>
                          Components
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item as={Link} to='/processors'onClick={closeNavbar}>PROCESSORS</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/graphicCards'onClick={closeNavbar}>GraphicCards</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/ram'onClick={closeNavbar}>RAM</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/motherBoards'onClick={closeNavbar}>Motherboards</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/ssd'onClick={closeNavbar}>Ssd discs</Dropdown.Item>
                          <Dropdown.Item as={Link} to='/ps'onClick={closeNavbar}>Power Supply</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link text-white' to='/contact'onClick={closeNavbar}>Contact</Link>
                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link text-white' to='/about'onClick={closeNavbar}>About</Link>
                    </li>
                  </ul>
                  <ul className='navbar-nav log-reg-margine'>
                    <li className='nav-item'>
                    <Link className='nav-link text-white' to='/login'onClick={closeNavbar}>Login</Link>

                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link text-white' to='/registration'onClick={closeNavbar}>Registration</Link>

                    </li>
                    <li className='nav-item'>
                    <Link className='nav-link text-white' to='/cart'onClick={closeNavbar}>Cart <FontAwesomeIcon  icon={faShoppingCart} /></Link>

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
              <Route path='/graphicCards' exact Component={GraphicsCards}/>
              <Route path='/ram' exact Component={Ram}/>
              <Route path='/motherBoards' exact Component={Motherboards}/>
              <Route path='/ssd' exact Component={Ssd}/>
              <Route path='/ps' exact Component={PowerSupply}/>
              <Route path='/login' exact Component={Login}/>
              <Route path='/registration' exact Component={Registration}/>
              <Route path='/cart' exact Component={Cart}/>
              <Route path='/AllComponents' exact Component={AllComponents}/>
            </Routes>
            <Footer/>
          </Router>
          </CartProvider>

      </AuthContext.Provider>
          
    </div>
  );
}

export default App;
