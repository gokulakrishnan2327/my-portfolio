// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-gray-800 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <Link to="/" className="text-white text-2xl font-bold">My Portfolio</Link>
      </div>
      <div className="hidden md:flex">
        <Link to="/about" className="ml-4 text-white hover:text-gray-300">About</Link>
        <Link to="/projects" className="ml-4 text-white hover:text-gray-300">Projects</Link>
        <Link to="/contact" className="ml-4 text-white hover:text-gray-300">Contact</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
