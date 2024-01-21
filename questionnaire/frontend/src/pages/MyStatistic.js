import "./styles/Home.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function MyStatistic() {
  const { questionId } = useParams();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/answer/${questionId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setAnswers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching answers:", error);
      });
  }, [questionId]);
  

  return (
    <div className="main-page">
      <div className="topics">
        {answers.map((answer) => (
          <div key={answer.id}>
            <h1>{answer.title}</h1>

            <div className="Ques-div">
              <h3>{answer.question1}</h3>
              <p className="Ques-option">{answer.option1}</p>
            </div>

            <div className="Ques-div">
              <h3>{answer.question2}</h3>
              <p className="Ques-option">{answer.option2}</p>
            </div>

            <div className="Ques-div">
              <h3>{answer.question3}</h3>
              <p className="Ques-option">{answer.option3}</p>
            </div>

            <div className="Ques-div">
              <h3>{answer.question4}</h3>
              <p className="Ques-option">{answer.option4}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
