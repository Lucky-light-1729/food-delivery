import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
  
        <div className="text-2xl font-extrabold tracking-wide hover:text-yellow-300 transition duration-300">
          <Link to="/">Zomato Mall </Link>
        </div>

     
        <ul className="flex space-x-8 text-lg font-semibold">
          <li className="hover:text-yellow-300 transition duration-300">
            <Link to="/Products">Products</Link>
          </li>
          <li className="hover:text-yellow-300 transition duration-300">
            <Link to="/AddSeller">Add Seller</Link>
          </li>
        
          <li className="hover:text-yellow-300 transition duration-300">
            <Link to="/Login">Login / Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;



