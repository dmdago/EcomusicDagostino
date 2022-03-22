import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import ItemListContainer from "./components/products/ItemListContainer.js";
import ItemDetailContainer from "./components/products/ItemDetailContainer";

function App() {
  const greeting = "Welcome to EcoMusic!";
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home greeting={greeting} />} />
        <Route path="/products/:catId" element={<ItemListContainer />} />
        <Route path="/detail/:prodId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
