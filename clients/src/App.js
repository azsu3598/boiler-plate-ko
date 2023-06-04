import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Chat_Page_Login from "./components/views/Chat_Page/Chat_Page_Login";
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />

        <Route exact path="/login" element={<LoginPage />} />

        <Route exact path="/register" element={<RegisterPage />} />

        <Route exact path="/chat" element={<Chat_Page_Login />} />
      </Routes>
    </div>
  );
}

export default App;
