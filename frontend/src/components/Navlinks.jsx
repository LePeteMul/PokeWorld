import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import App from "../App";
import MyDeck from "./MyDeck/MyDeck";
import PlaylistPage from "./Playlist/PlaylistPage";
import Comparator from "./Comparator/Comparator";

function Navlinks() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/AppPokeworld" element={<App />} />
      <Route path="/MyDeck" element={<MyDeck />} />
      <Route path="/PlaylistPage" element={<PlaylistPage />} />
      <Route path="/Comparator" element={<Comparator />} />
    </Routes>
  );
}

export default Navlinks;
