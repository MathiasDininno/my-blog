import './App.css';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';

function Nav() {
  return (
    <Router>
      <div className='flex flex-col'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Nav;

