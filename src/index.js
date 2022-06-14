import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import navbar from './Navbar';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

// ReactDOM.render("<h1>Hello React!</h1>", document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  {/* <Navbar/> */}
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
