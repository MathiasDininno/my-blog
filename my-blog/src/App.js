import './nav.css';
import Home from "./Screens/Home";
import Contact from "./Screens/Contact";

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';

function Nav() {
  return (
    <div className='flex flex-col'>
      <BrowserRouter>
        <NavBar />
          <Routes>              
            <Route path='/' element={<Home/>}/>
            <Route path='/about-us' element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Nav;
