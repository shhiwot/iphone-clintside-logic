import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./commonResource/css/bootstrap.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./commonResource/css/styles.css";
import"./Classbased_component/Header/NavLinks/Iphone/iphone.css"
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
