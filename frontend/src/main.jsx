import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import ParentsLinks from "./components/ParentsLinks";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ParentsLinks />
    </BrowserRouter>
  </React.StrictMode>
);
