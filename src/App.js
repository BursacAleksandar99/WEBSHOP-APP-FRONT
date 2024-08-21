import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Registration from './pages/Registration';


function App() {
  return (
    
    <div className="App">
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

                  </ul>

                </div>
              </div>
              
            </nav>
            <Routes>
              <Route path='/' exact Component={Home}/>
              <Route path='/contact' exact Component={Contact}/>
              <Route path='/about' exact Component={About}/>
              <Route path='/login' exact Component={Login}/>
              <Route path='/registration' exact Component={Registration}/>
            </Routes>
          </Router>
    </div>
  );
}

export default App;
