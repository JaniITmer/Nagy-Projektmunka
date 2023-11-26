import './App.css';
import Navbar from "./Navbar"
import Login from "./pages/Login"
import Register from './pages/Register';
import MyQuestonnaire from './pages/MyQuestionnaire';
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-questionnaire" element={<MyQuestonnaire />} />
        </Routes>
      </div>
    </>
  );
}

export default App;