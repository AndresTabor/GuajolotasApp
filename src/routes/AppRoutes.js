import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrouserl from '../components/Carrouserl';
import Cart from '../components/Cart';
import Details from '../components/Details';

const AppRoutes = () => {
  return <BrowserRouter>
            <Routes>
              <Route path="/cart" element={<Cart/>} /> 
              <Route path="/details" element={<Details />} />
              <Route path="/carrousel" element={<Carrouserl />} />
            </Routes>
        </BrowserRouter>;
};

export default AppRoutes;
