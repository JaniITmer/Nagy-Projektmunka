import React, { useState } from 'react';
import axios from 'axios';
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
  

  const handleSave = async () => {
    try {
      // Ellenőrizzük, hogy a cím és a kérdések kitöltve vannak-e
      if (!title || questions.some(q => q.question.trim() === '' || q.options.some(opt => opt.trim() === ''))) {
        alert('Kérem, töltse ki a címet és minden kérdést az összes válasszal.');
        return;
      }
  
      // Elküldjük a kérdőív adatait a szervernek
      const response = await axios.post('http://localhost:8080/my-questionnaire', {
        title,
        questions,
      });
  
      // A válasz feldolgozása
      if (response.data.success) {
        alert(response.data.message);
      } else {
        alert('Hiba történt a mentés során.');
      }
    } catch (error) {
      console.error('Hiba a mentés során:', error.message);
      alert('Hiba történt a mentés során.');
    }
  };

  return (
    <div className='myQues-div'>
      <h1 className='myQues-h1'>{title}</h1>
      <label className='myQues-label'>Cím: 
        <input className='myQues-ciminput' type="text" value={title} onChange={handleTitleChange} />
      </label>
      {questions.map((q, questionIndex) => (
        <div className='myQues-div2' key={questionIndex}>
          <label className='myQues-label'>Kérdés {questionIndex + 1}: 
            <input className='myQues-input'
              type="text"
              value={q.question}
              onChange={(event) => handleQuestionChange(questionIndex, event)}
            />
          </label>
          <ul className='myQues-ul'>
            {q.options.map((option, optionIndex) => (
              <li className='myQues-li' key={optionIndex}>
                <label className='myQues-label'>
                  Válasz {optionIndex + 1}: 
                  <input className='myQues-input'
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
      
      
      <button className="myQues-button" onClick={handleSave}>
        Mentés
      </button>
    </div>
  );
};

export default MyQuestionnaire;