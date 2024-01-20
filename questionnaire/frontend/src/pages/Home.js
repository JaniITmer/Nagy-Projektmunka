import "./styles/Home.css";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home({ loggedIn }) {
  const [questionnaires, setQuestionnaires] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      axios
        .get("http://localhost:8080/questions", { withCredentials: true })
        .then((response) => {
          const { categories } = processData(response.data);
          setQuestionnaires(categories);
        })
        .catch((error) => {
          console.error("Error fetching questionnaires:", error);
        });
    }
  }, [loggedIn]);

  const processData = (data) => {
    const categoriesMap = new Map();

    data.forEach((item) => {
      const category = item.category;

      if (!categoriesMap.has(category)) {
        categoriesMap.set(category, {
          name: category,
          questionnaires: [],
        });
      }

      categoriesMap.get(category).questionnaires.push({
        id: item.id,
        title: item.title,
      });
    });

    return {
      categories: Array.from(categoriesMap.values()),
      questionnaires: [],
    };
  };

  return (
    <div className="main-page">
      {loggedIn ? (
        <div className="topics">
          <div className="header">
          <div className="h1">Elérhető kérdőívek</div>
          <div className="underline"></div>
        </div>
          {questionnaires.map((category) => (
            <div key={category.name} className="card">
              <h2>{category.name}</h2>
              {category.questionnaires.map((questionnaire) => (
                <div key={questionnaire.id} className="card">
                  <p>
                    <Link
                      to={`/questionnaire/${questionnaire.id}`}
                      className="ujKerdoivGomb"
                    >
                      {questionnaire.title}
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          ))}
          <div className="card">
            <h2>Új kérdőív</h2>
            <p>
              <Link to="/new-questionnaire" className="ujKerdoivGomb">
                +
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="topics">
          <h1>Jelenleg vendég módban van!</h1>
          <h1>A kérdőívek megtekintéséhez jelentkezzen be!</h1>
        </div>
      )}
    </div>
  );
}

/*
            {loggedIn ? (
                  <>
                    <CustomLink to="/profile">Profil</CustomLink>
                    <button onClick={onLogout}>Kijelentkezés</button>
                  </>
                ) : (
                  <>
                    <CustomLink to="/login">Bejelentkezés</CustomLink>
                    <CustomLink to="/register">Regisztráció</CustomLink>
                  </>
                )}
            */
