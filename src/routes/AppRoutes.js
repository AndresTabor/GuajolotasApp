import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Home } from '../components/Home';

const AppRoutes = () => {
  return <div>
      <BrowserRouter>       
        <Routes>
           <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
  </div>;
};

export default AppRoutes;
