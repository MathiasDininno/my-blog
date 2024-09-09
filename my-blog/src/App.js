import './App.css';
import Home from './Screens/Home';
import Contact from './Screens/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Article from './Article/Article';
import Splash from './Splash/Splash'
import Proyects from './Proyects/Proyects';

function Nav() {
  return (
    <Router>
      <div className='flex flex-col'>
        <Splash />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<Contact />} />
        </Routes>
      </div>
      <Article />
      <Proyects />
    </Router>
  );
}

export default Nav;

