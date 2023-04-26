import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import NavBar from "./components/NavBar";
import Header from "./components/header";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./containers/login";
import Register from "./containers/register";
function App() {
  return (
    <>
      <Header />
      {/* <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Routes> */}
    </>
  );
}

export default App;
