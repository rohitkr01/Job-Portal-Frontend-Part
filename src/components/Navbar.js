import { NavLink } from 'react-router-dom';
import React from 'react';
import '../style/Navbar.css';
// import LeftNavbar from './Left-Navbar';

const Navbar = () => {
  return (
    
    <div className='Navigation'>
      <div className="logo">
        <h1>Coding <span>Bz</span></h1>
        <NavLink to="/jobs">Explore Jobs</NavLink>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/jobs">Jobs</NavLink>  
          </li>
          <li>
            <NavLink to="/about">About</NavLink>  
          </li>
          <li>
            <NavLink to="/contact">Contact us</NavLink>  
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>  
          </li>
          <li>
            <NavLink to="/chatbot">Chatbot</NavLink>  
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Navbar;