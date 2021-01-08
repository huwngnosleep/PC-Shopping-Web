import React from "react";
import "./styles.css";

// components
import Heading from "./components/Heading";

//router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// pages
import Home from "./pages/Home"
import Products from "./pages/Products"
import DetailProduct from "./pages/DetailProduct"

export default function App() {
  return (
    <Router>
      <div className="App">
        <Heading />
      </div>
      <div>
        <Route exact path="/detail-product/" component={DetailProduct} />
        <Route exact path="/products/" component={Products} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}
