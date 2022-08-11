import * as React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
      <Routes>
        <Route path="/:token/:id" element={<LandingPage />} />
      </Routes>
  );
}