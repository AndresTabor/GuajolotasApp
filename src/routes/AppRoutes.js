import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Carrouserl from '../components/Carrouserl';
import Cart from '../components/Cart';
import Details from '../components/Details';
import { Home } from '../components/Home';
import { getData } from '../helpers/GetData';
import { endPoint } from '../helpers/Url';

const AppRoutes = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData(endPoint+"products").then(items => setProducts(items))
    
  }, []);
  
  console.log(products);
  return <BrowserRouter>
            <Routes>
            <Route path="/" element={<Home/>} /> 
              <Route path="/cart" element={<Cart/>} /> 
              <Route path="/details" element={<Details  products={products}/>} />
              <Route path="/carrousel" element={<Carrouserl />} />
            </Routes>
        </BrowserRouter>;
};

export default AppRoutes;
