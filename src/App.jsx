import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Product" element={<Product />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
