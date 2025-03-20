import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import Login from "../pages/Login.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}