import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import ClothePage from "./pages/clothePage.jsx";
import Category from "./pages/category.jsx";

function App() {
  return (
    <Router>
      {/* <Link to="/"></Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roupa/:id" element={<ClothePage />} />
        <Route path="/categoria/:category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
