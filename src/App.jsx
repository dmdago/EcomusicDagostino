import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar.jsx";
import Home from "./components/home/Home";
import ItemListContainer from "./components/products/ItemListContainer";
import ItemDetailContainer from "./components/products/ItemDetailContainer";
import Cart from "./components/cart/Cart";

function App() {
  const greeting = "Welcome to EcoMusic!";
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home greeting={greeting} />} />
        <Route path="/products/:catId" element={<ItemListContainer />} />
        <Route path="/detail/:prodId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
