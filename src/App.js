import React from "react";
import "./App.css";
//Import route and our components
import { 
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";
import Currencies from "./pages/currencies";
import Main from "./pages/main";
import Price from "./pages/price";
import Nav from "./components/nav";

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="currencies/" element={<Currencies />} />
        <Route path="price/" element={<Price />}>
          <Route path=":symbol" element={<Price />} />
          <Route path="*" element={<p>Nothing here</p>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
