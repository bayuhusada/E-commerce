import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./Home/Slider";
import Product from "./Product/Product";
import Shop from "./Pages/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      {/* Routes menentukan halaman mana yang dirender */}
      <Routes>
        {/* Halaman home, yang memuat Slider dan Product */}
        <Route path="/" element={
          <>
            <Slider />
            <Product />
          </>
        } />

        {/* Halaman Shop */}
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}
