import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { UserProvider } from "./../UserContext.jsx";
import { CartProvider } from "./../CartContext";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import AddProduct from "../pages/AddProduct.jsx";
import Cart from "../pages/Cart.jsx";
import AboutUs from "../pages/AboutUs.jsx";

export default function Router() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add" element={<AddProduct />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
          <Footer />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
}
