import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter, Routes, Route as Router } from "react-router-dom";

//Wrap the App Component with the Router component to enable the router features
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  
  document.getElementById("root")
);

reportWebVitals();
