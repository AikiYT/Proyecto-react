import React from 'react';
import ReactDOM from 'react-dom/client';

// anadimos bootstrap a nuestro proyecto debe estar arriba del css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // anadi esto para usar iconos de bootrap
//! importante: los estilos propios deben ir debajo del bootrap para que no nos pisen

import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import AppRoutingOne from './AppRoutingOne';
import AppRotingFinal from './AppRotingFinal';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/*} <App />*/}
   {/* <AppRoutingOne></AppRoutingOne> */}
   <AppRotingFinal></AppRotingFinal>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
