import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/AppRoutes';

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes/>
  </React.StrictMode>,
  document.getElementById('root')
);


