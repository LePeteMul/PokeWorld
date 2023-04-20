import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import App from "../App";

function Navlinks() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/AppPokeworld" element={<App />} />
    </Routes>
  );
}

export default Navlinks;
