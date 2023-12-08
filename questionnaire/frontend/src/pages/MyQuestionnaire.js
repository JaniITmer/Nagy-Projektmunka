import React, { useState } from 'react';
import './MyQuestionnaire.css';

const MyQuestionnaire = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", "", ""] },
    { question: "", options: ["", "", "", ""] },
    { question: "", options: ["", "", "", ""] },
    { question: "", options: ["", "", "", ""] },
  ]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleQuestionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index].question = event.target.value;
    setQuestions(newQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, event) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleSave = () => {
    
    console.log("Mentés gombra kattintva...");
  };

  return (
    <div>
      <h1>{title}</h1>
      <label>Cím: 
        <input type="text" value={title} onChange={handleTitleChange} />
      </label>
      {questions.map((q, questionIndex) => (
        <div key={questionIndex}>
          <label>Kérdés {questionIndex + 1}: 
            <input
              type="text"
              value={q.question}
              onChange={(event) => handleQuestionChange(questionIndex, event)}
            />
          </label>
          <ul>
            {q.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  Válasz {optionIndex + 1}: 
                  <input
                    type="text"
                    value={option}
                    onChange={(event) => handleOptionChange(questionIndex, optionIndex, event)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      
      <button className="save-button" onClick={handleSave}>
        Mentés
      </button>
    </div>
  );
};

export default MyQuestionnaire;