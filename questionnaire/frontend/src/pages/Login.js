import React, { useState } from "react";
import "./styles/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import email_icon from "../images/email.png";
import passwd_icon from "../images/password.png";

export default function Login({ onLogin, islogged }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/login", values, { withCredentials: true })
      .then((res) => {
        console.log("Sikeres bejelentkezés");
        if (res.data.userId) {
          onLogin({
            email: res.data.email,
            username: res.data.username,
            password: res.data.password,
            isLoggedIn: true, 
          });
          navigate("/");
        }
      })
      .catch((err) => {
        if (!values.email || !values.password) {
          alert("Minden mezőt ki kell töltenie!");
        } else if (!values.password || !values.email) {
          alert("Minden mezőt ki kell töltenie!");
        } else {
          alert("Hibás email vagy jelszó!");
        }
        console.log(err);
      });
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="header">
          <div className="h1">Bejelentkezés</div>
          <div className="underline"></div>
        </div>
        <form className="inputs" action="" onSubmit={handleSubmit}>
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInput}
            />
          </div>
          <div className="input">
            <img src={passwd_icon} alt="" />
            <input
              type="password"
              placeholder="Jelszó"
              name="password"
              onChange={handleInput}
            />
          </div>
          <button className="button" type="submit">
            Bejelentkezés
          </button>
        </form>
      </div>
    </div>
  );
}
