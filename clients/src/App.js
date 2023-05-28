import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />

        <Route exact path="/login" element={<LoginPage />} />

        <Route exact path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
