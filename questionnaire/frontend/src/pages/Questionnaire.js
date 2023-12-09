import './styles/Home.css';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Questionnaire() {
  const [questions, setQuestions] = useState([]);
  const { questionId } = useParams();

  const [values, setValues] = useState({
    user_id: '',
    question_id: questionId,
    option1: '',
    option2: '',
    option3: '',
    option4: ''
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

  axios.post('http://localhost:8080/answer', values)
  .then(res => {
    navigate('/');
    console.log(res);
  })
  .catch(err => console.log(err));
}

  useEffect(() => {
    axios.get(`http://localhost:8080/questions/${questionId}`)
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  }, [questionId]);

  return (
    <div className="main-page">
      <div className="topics">
        {questions.map((question) => (
        <div>    
              <form action="" onSubmit={handleSubmit}>
                <h1>{question.title}</h1>    
                <h3>{question.question1}</h3>
                <input  type="text" id="option1"  className="form__input"
                            name="option1" onChange={handleInput}/>

                <h3>{question.question2}</h3>
                <input  type="text" id="option2"  className="form__input"
                            name="option2" onChange={handleInput}/>

                <h3>{question.question3}</h3>
                <input  type="text" id="option3"  className="form__input"
                            name="option3" onChange={handleInput}/>

                <h3>{question.question4}</h3>
                <input  type="text" id="option4"  className="form__input"
                            name="option4" onChange={handleInput}/>

              
                    <button className='button' type='submit'>Kérdőív beküldése</button>
                </form>
        </div>
    ))}

        <div className="card">
        </div>
      </div>
      <div className="main-page-info">
        <h1>Jelenleg vendég módban van!</h1>
        <h1>A kérdőívek kitöltéséhez jelentkezzen be!</h1>
      </div>
    </div>
  );
}
