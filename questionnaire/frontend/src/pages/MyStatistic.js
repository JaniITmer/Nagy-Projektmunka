import "./styles/Home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MyStatistic() {
  const { questionId } = useParams();
  const [answers, setAnswers] = useState([]);
  const [mostSelectedAnswers, setMostSelectedAnswers] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/answer/${questionId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setAnswers(response.data);
        updateMostSelectedAnswers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching answers:", error);
      });
  }, [questionId]);
  
  const updateMostSelectedAnswers = (answers) => {
    const mostSelected = {};

    // Loop through each question and find the most selected answer
    answers.forEach((answer) => {
      for (let i = 1; i <= 4; i++) {
        const optionKey = `option${i}`;
        if (!mostSelected[answer[`question${i}`]]) {
          mostSelected[answer[`question${i}`]] = {
            option: answer[optionKey],
            count: 1,
          };
        } else {
          mostSelected[answer[`question${i}`]].count += 1;
        }
      }
    });

    setMostSelectedAnswers(mostSelected);
  };
  return (
    <div className="main-page">
      <div className="topics">
        {answers.map((answer) => (
          <div key={answer.id}>
            <div className="header">
              <div className="h1">{answer.title}</div>
              <div className="underline"></div>
            </div>

            <div className="Ques-div">
              <h3 className="newQues-label">{answer.question1}</h3>
              <p className="Ques-option">{answer.option1}</p>
            </div>

            <div className="Ques-div">
              <h3 className="newQues-label">{answer.question2}</h3>
              <p className="Ques-option">{answer.option2}</p>
            </div>

            <div className="Ques-div">
              <h3 className="newQues-label">{answer.question3}</h3>
              <p className="Ques-option">{answer.option3}</p>
            </div>

            <div className="Ques-div">
              <h3 className="newQues-label">{answer.question4}</h3>
              <p className="Ques-option">{answer.option4}</p>
            </div>
            
          <div className="most-selected">
            <h3 className="newQues-label">Legtöbbször kiválasztott válaszok:</h3>
            <div className="userDatas">
            {[1, 2, 3, 4].map((questionNumber) => (
              <p className="" key={questionNumber}>
                <strong>Kérdés {questionNumber}:</strong> {mostSelectedAnswers[answer[`question${questionNumber}`]]?.option || 'Nem elérhető'}
              </p>
            ))}
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}