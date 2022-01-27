import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../components/Cart';
import Details from '../components/Details';

const AppRoutes = () => {
  return <BrowserRouter>
            <Routes>
              <Route path="/cart" element={<Cart/>} /> 
              <Route path="/details" element={<Details />} />
            </Routes>
        </BrowserRouter>;
};

export default AppRoutes;
