import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Login from "./pages/Login";
import Register from './pages/Register';
import MyQuestonnaire from './pages/MyQuestionnaire';
import Questionnaire from './pages/Questionnaire';
import Home from "./pages/Home";
import Profile from './pages/Profile';
import NewQuestionnaire from './pages/NewQuestionnaire';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  const handleLogin = (email) => {
    setLoggedIn(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/');
  };
  return (
    <div>
     <Navbar loggedIn={isLoggedIn} onLogout={handleLogout} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-questionnaire" element={<NewQuestionnaire />} />
          <Route path="/login" element={<Login onLogin={handleLogin}/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-questionnaire" element={<MyQuestonnaire />} />
          <Route path="/questionnaire/:questionId" element={<Questionnaire />} />
          <Route path="/profile" element={<Profile userEmail={userEmail} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
