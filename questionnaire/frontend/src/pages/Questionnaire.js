import "./styles/Home.css";
import "./styles/NewQuestionnaire.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Questionnaire() {
  const [questions, setQuestions] = useState([]);
  const { questionId } = useParams();
  const [answers, setAnswers] = useState({
    option1: "",
    option2: "",
    option3: "",
    option4: "",
  });
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setAnswers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8080/answer/${questionId}`, answers, {
        withCredentials: true,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/questions/${questionId}`, {
        withCredentials: true,
      })
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, [questionId]);

  return (
    <div className="main-page">
      <div className="topics">
        {questions.map((question) => (
          <div>
            <form action="" onSubmit={handleSubmit}>
              <h1>{question.title}</h1>
              <div className="Ques-div">
                <h3 className="newQues-label">{question.question1}</h3>
                <div className="Ques-options-container">
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option1"
                    value={question.option1_1}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option1_1}</p>
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option1"
                    value={question.option1_2}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option1_2}</p>
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option1"
                    value={question.option1_3}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option1_3}</p>
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option1"
                    value={question.option1_4}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option1_4}</p>
                </div>
              </div>
              <div className="Ques-div">
                <h3 className="newQues-label">{question.question2}</h3>
                <div className="Ques-options-container">
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option2"
                    value={question.option2_1}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option2_1}</p>
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option2"
                    value={question.option2_2}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option2_2}</p>
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option2"
                    value={question.option2_3}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option2_3}</p>
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option2"
                    value={question.option2_4}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option2_4}</p>
                </div>
              </div>
              <div className="Ques-div">
                <h3 className="newQues-label">{question.question3}</h3>
                <div className="Ques-options-container">
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option3"
                    value={question.option3_1}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option3_1}</p>
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option3"
                    value={question.option3_2}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option3_2}</p>
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option3"
                    value={question.option3_3}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option3_3}</p>
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option3"
                    value={question.option3_4}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option3_4}</p>
                </div>
              </div>
              <div className="Ques-div">
                <h3 className="newQues-label">{question.question4}</h3>
                <div className="Ques-options-container">
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option4"
                    value={question.option4_1}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option4_1}</p>
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option4"
                    value={question.option4_2}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option4_2}</p>
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option4"
                    value={question.option4_3}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option4_3}</p>
                  <input
                    className="radioBtn"
                    type="radio"
                    name="option4"
                    value={question.option4_4}
                    onChange={handleInput}
                  ></input>
                  <p className="Ques-option">{question.option4_4}</p>
                </div>
              </div>

              <button className="button" type="submit">
                Kérdőív beküldése
              </button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
