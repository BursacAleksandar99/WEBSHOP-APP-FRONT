import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="App">
          <Router>
            <Routes>
              <Route path='/' exact Component={Home}/>
              <Route path='/contact' exact Component={Contact}/>
              <Route path='/about' exact Component={About}/>
            </Routes>
          </Router>
    </div>
  );
}

export default App;
