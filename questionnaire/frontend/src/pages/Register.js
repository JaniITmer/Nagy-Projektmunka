import React, { useState } from "react";
import "./styles/Register.css";
import "./styles/Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { basic_eye } from "react-icons-kit/linea/basic_eye";
import { basic_eye_closed } from "react-icons-kit/linea/basic_eye_closed";
import { arrows_exclamation } from "react-icons-kit/linea/arrows_exclamation";
import { arrows_circle_check } from "react-icons-kit/linea/arrows_circle_check";
import Icon from "react-icons-kit";

import user_icon from "../images/username.png";
import passwd_icon from "../images/password.png";
import email_icon from "../images/email.png";

export default function Register() {
  const [type, setType] = useState("password");

  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);

  const handleChange = (value) => {
    const lower = new RegExp("(?=.*[a-z])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*+-])");
    const length = new RegExp("(?=.{8,})");
    if (lower.test(value)) {
      setLowerValidated(true);
    } else {
      setLowerValidated(false);
    }
    if (upper.test(value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    if (number.test(value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    if (special.test(value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
    if (length.test(value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
  };

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //Üres hagyott mező hibaüzenet
    if (!values.username || !values.email || !values.password) {
      alert("Minden mezőt ki kell töltenie!");
      return;
    }

    //Nem megfelelő jelszó hibaüzenet
    if (
      !(
        lowerValidated &&
        upperValidated &&
        numberValidated &&
        specialValidated &&
        lengthValidated
      )
    ) {
      alert("A jelszó nem megfelelő!");
      return;
    }

    if (values.password !== values.confirmPassword) {
      alert("A jelszavak nem egyeznek!");
      return;
    }

    axios
      .get(`http://localhost:8080/check-email/${values.email}`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data && response.data.exists) {
          alert("Az email cím már foglalt!");
        } else {
          axios
            .post("http://localhost:8080/register", values, {
              withCredentials: true,
            })
            .then((res) => {
              navigate("/login");
              console.log(res);
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="header">
          <div className="h1">Regisztráció</div>
          <div className="underline"></div>
        </div>
          <form
            className="inputs"
            action=""
            onSubmit={handleSubmit}
          >
            
            <div className="input">
              <img src={user_icon} alt="" />
              <input
                type="text"
                placeholder="Felhasználónév"
                name="username"
                onChange={handleInput}
              />
            </div>
            
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
              type={type}
              placeholder="Jelszó"
              name="password"
              onChange={(e) => {
                handleChange(e.target.value);
                handleInput(e);
              }}
            />
            {type === "password" ? (
                <span className="icon-span" onClick={() => setType("text")}>
                  <Icon icon={basic_eye_closed} size={30} />
                </span>
              ) : (
                <span className="icon-span" onClick={() => setType("password")}>
                  <Icon icon={basic_eye} size={30} />
                </span>
              )}
          </div>
          <div className="input">
              <img src={passwd_icon} alt="" />
              <input
                type="password"
                placeholder="Jelszó megerősítése"
                name="confirmPassword"
                onChange={handleInput}
              />
            </div>
            <div className="">              
            
              <main className="tracker-box">
                <div className="password_felt">
                  A jelszó beállításához a következő feltételek szükségesek:
                </div>
                <div className={lowerValidated ? "validated" : "not-validated"}>
                  {lowerValidated ? (
                    <span className="list-icon green">
                      <Icon icon={arrows_circle_check} />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <Icon icon={arrows_exclamation} />
                    </span>
                  )}
                  Legalább egy kisbetűt tartalmaz
                </div>
                <div className={upperValidated ? "validated" : "not-validated"}>
                  {upperValidated ? (
                    <span className="list-icon green">
                      <Icon icon={arrows_circle_check} />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <Icon icon={arrows_exclamation} />
                    </span>
                  )}
                  Legalább egy nagybetűt tartalmaz
                </div>
                <div
                  className={numberValidated ? "validated" : "not-validated"}
                >
                  {numberValidated ? (
                    <span className="list-icon green">
                      <Icon icon={arrows_circle_check} />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <Icon icon={arrows_exclamation} />
                    </span>
                  )}
                  Legalább egy számot tartalmaz
                </div>
                <div
                  className={specialValidated ? "validated" : "not-validated"}
                >
                  {specialValidated ? (
                    <span className="list-icon green">
                      <Icon icon={arrows_circle_check} />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <Icon icon={arrows_exclamation} />
                    </span>
                  )}
                  Legalább egy speciális karatkert tartalmaz
                </div>
                <div
                  className={lengthValidated ? "validated" : "not-validated"}
                >
                  {lengthValidated ? (
                    <span className="list-icon green">
                      <Icon icon={arrows_circle_check} />
                    </span>
                  ) : (
                    <span className="list-icon">
                      <Icon icon={arrows_exclamation} />
                    </span>
                  )}
                  Legalább 8 karaktert tartalmaz
                </div>
              </main>
            </div>           
            <div className="footer">
              <button className="button btn_reg" type="submit" variant="outlined">
                Regisztráció
              </button>
            </div>
      </form>
    </div>
  </div>
  );
}
