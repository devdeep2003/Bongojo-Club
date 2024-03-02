import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../index.css';
import logo from '../assets/logo.png'


const Navbar = () => {
  return (
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="nav-links">
          <Link to='/'>Home</Link>
          <Link to ='/events'>Gallery</Link>
          <Link to='/members'>Members</Link>
        </div>
      </div>

  );
};

export default Navbar;
