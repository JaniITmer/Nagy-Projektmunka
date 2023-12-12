import './styles/Home.css';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home({ loggedIn, userEmail}) {
  const [questionnaires, setQuestionnaires] = useState([]);
  console.log('loggedIn:', loggedIn);
  useEffect(() => {
    if (loggedIn) {
    axios.get('http://localhost:8080/questionnaires')
      .then(response => {
        setQuestionnaires(response.data);
      })
      .catch(error => {
        console.error('Error fetching questionnaires:', error);
      });
    }
  }, [loggedIn]);

  return (
    <div className="main-page">
      {loggedIn ? (
        <div className="topics">
          <h1>Elérhető kérdőív témák</h1>
          {questionnaires.map(questionnaire => (
            <div key={questionnaire.id} className="card">
              <h2>{questionnaire.title}</h2>
              <p>
                <Link to={`/questionnaire/${questionnaire.question_id}`} className="ujKerdoivGomb">
                  {questionnaire.title}
                </Link>
              </p>
            </div>
          ))}
          <div className="card">
            <h2>Saját kérdőív</h2>
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
          <h1>A kérdőívek kitöltéséhez jelentkezzen be!</h1>
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