import React, { useState, useEffect } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Navbar from "./Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";

import NewQuestionnaire from "./pages/NewQuestionnaire";
import Questionnaire from "./pages/Questionnaire";

import Profile from "./pages/Profile";
import Statistics from "./pages/Statistics";
import MyStatistic from "./pages/MyStatistic";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUserEmail = localStorage.getItem("userEmail") || "";
    const storedUsername = localStorage.getItem("username") || "";
    const storedPassword = localStorage.getItem("password") || "";

    setLoggedIn(storedLoggedIn);
    setUserEmail(storedUserEmail);
    setUsername(storedUsername);
    setPassword(storedPassword);
  }, []);

  const handleLogin = (email, username, password) => {
    setLoggedIn(true);
    setUserEmail(email);
    setUsername(username);
    setPassword(password);

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  };

  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:8080/logout", {
        withCredentials: true,
      });

      setLoggedIn(false);
      setUserEmail("");
      setUsername("");
      setPassword("");

      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("username");
      localStorage.removeItem("password");

      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  
  return (
    <div>
      <Navbar loggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home loggedIn={isLoggedIn} />} />
          <Route
            path="/statistics"
            element={<Statistics loggedIn={isLoggedIn} />}
          />
          <Route path="/my-statistics/:questionId" element={<MyStatistic />} />
          <Route path="/new-questionnaire" element={<NewQuestionnaire />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/questionnaire/:questionId"
            element={<Questionnaire />}
          />
          <Route
            path="/profile"
            element={
              <Profile
                userEmail={userEmail}
                username={username}
                password={password}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
