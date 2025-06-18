   import React from 'react';
   import './App.css';
   import Navbar from './NavBar';
   import { Routes, Route } from 'react-router-dom';
   import Home from './Home';
   import AddSeller from './AddSeller';
   import Product from './Products';
   import Login from './Login';

   function App() {
     return (
       <>
         <Navbar />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/AddSeller" element={<AddSeller />} />
           <Route path="/Products" element={<Product />} />
           <Route path="/Login" element={<Login />} />
         </Routes>
       </>
     );
   }

   export default App;
   