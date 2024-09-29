import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./Home/Slider";
import Product from "./Product/Product";

export default function App() {
  return (
    <div className=" items-center justify-center">
    <Navbar/>
    <Slider/>
    <Product/>
    </div>
  )
}