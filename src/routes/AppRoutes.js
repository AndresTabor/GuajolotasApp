import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from '../components/Cart';

const AppRoutes = () => {
  return <BrowserRouter>
            <Routes>
              <Route path="/cart" element={<Cart/>} /> 
            </Routes>
        </BrowserRouter>;
};

export default AppRoutes;
