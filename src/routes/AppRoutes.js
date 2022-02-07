import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Carrouserl from '../components/Carrouserl';
import Cart from '../components/Cart';
import Details from '../components/Details';
import { Home } from '../components/Home';
import { Login } from '../components/Login';
import Register from '../components/Register';
import Search from '../components/Search';
import { getData } from '../helpers/CrudData';
import { endPoint } from '../helpers/Url';

const AppRoutes = () => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState(false)
  const [cartState, setCartState] = useState(false);
  

  useEffect(() => {
    getData(endPoint+"products").then(items => setProducts(items))
    const cart = JSON.parse(localStorage.getItem("cartState"))
    
    if (cart !== null) {
      setCartState( true );
      console.log("carrito lleno");
    } 
    

  }, [cartState]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))    
    localStorage.setItem('estado',logged)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logged])

  
  
  console.log(products);
  return <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} /> 
              <Route path="/login" element={<Login cambioUser={setUser} setLogged={setLogged} />} /> 
              <Route path="/register" element={<Register/>} /> 
              <Route path="/details/:index/:category" element={<Details  
                products={products} cartState={cartState} setCartState={setCartState}/>} />
              <Route path="/carrousel" element={<Carrouserl />} />  
              <Route path="/cart" element={<Cart/>} />     
              <Route path="/search" element={<Search/>} />           
              <Route path="/*" element={<Navigate to="/"/>} />            
            </Routes>
        </BrowserRouter>;
};

export default AppRoutes;
