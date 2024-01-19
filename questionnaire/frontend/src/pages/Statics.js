import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home({ loggedIn }) {
  const [questionnaires, setQuestionnaires] = useState([]);

  useEffect(() => {
    if (loggedIn) {
      axios
        .get("http://localhost:8080/statistics-count", {
          withCredentials: true,
        })
        .then((response) => {
          const filledCountsMap = new Map(
            response.data.map((item) => [item.question_id, item.fillCount])
          );

          axios
            .get("http://localhost:8080/statistics", { withCredentials: true })
            .then((response) => {
              const { categories } = processData(
                response.data,
                filledCountsMap
              );
              setQuestionnaires(categories);
            })
            .catch((error) => {
              console.error("Error fetching questionnaires:", error);
            });
        })
        .catch((error) => {
          console.error("Error fetching fill counts:", error);
        });
    }
  }, [loggedIn]);

  const processData = (data, filledCountsMap) => {
    const categoriesMap = new Map();

    data.forEach((item) => {
      const category = item.category;

      if (!categoriesMap.has(category)) {
        categoriesMap.set(category, {
          name: category,
          questionnaires: [],
        });
      }

      const fillCount = filledCountsMap.get(item.id) || 0;

      categoriesMap.get(category).questionnaires.push({
        id: item.id,
        title: item.title,
        fillCount: fillCount,
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
          <h1>Kitöltött kérdőívek</h1>
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
                  <p>Ennyien töltötték ki: {questionnaire.fillCount}</p>
                </div>
              ))}
            </div>
          ))}
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
