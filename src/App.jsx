import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import SearchResultDetail from "./components/SearchResultDetail ";
import { Allinfo } from "./components/Allinfo";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Products from "./components/Products";
import { Cart } from "./components/Cart";
import { Addproduct } from "./components/Addproduct";

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/result/:id" element={<SearchResultDetail />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>

      {isHomePage && <Allinfo />}
    </div>
  );
}

export default App;
