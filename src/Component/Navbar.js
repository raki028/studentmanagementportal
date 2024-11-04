import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => (
  <nav>
    <Link to="/">Dashboard</Link>
    <Link to="/register">Register Student</Link>
    <Link to="/students">Student List</Link>
  </nav>
);

export default Navbar;
