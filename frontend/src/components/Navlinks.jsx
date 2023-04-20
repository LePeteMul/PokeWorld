import React from "react";
import { Routes, Route } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import MainPage from "./MainPage";

function Navlinks() {
  return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route path="/pokeworld" element={<MainPage />} />
    </Routes>
  );
}

export default Navlinks;
