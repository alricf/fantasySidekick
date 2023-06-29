// Imports
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Chart from "./components/Chart";

export default function App() {
  // Template
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/chart" element={<Chart />} />
        </Routes>
      </Router>
    </>
  );
}