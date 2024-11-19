import * as React from "react";
import "./stylesheets/global.css";
import Home from "./pages/Home.tsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const container = document.querySelector(".root")!;
const root = createRoot(container);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);
