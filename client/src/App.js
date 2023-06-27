// Imports
import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

export default function App() {
  // Template
  return (
    <>
      <Router>
        <ul className="flex justify-center space-x-5">
          <li className="border-black border-2 bg-sky-400 px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="border-black border-2 bg-sky-400 px-2">Chart</li>
          <li className="border-black border-2 bg-sky-400 px-2">Top 100 Stats</li>
          <li className="border-black border-2 bg-sky-400 px-2">Mini-League Stats</li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}