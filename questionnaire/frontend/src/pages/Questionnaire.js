import './styles/Home.css';
import './styles/NewQuestionnaire.css';

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
    option1_1: '',
    option1_2: '',
    option1_3: '',
    option1_4: '',
    option2_1: '',
    option2_2: '',
    option2_3: '',
    option2_4: '',
    option3_1: '',
    option3_2: '',
    option3_3: '',
    option3_4: '',
    option4_1: '',
    option4_2: '',
    option4_3: '',
    option4_4: ''
  });
const navigate = useNavigate();

const handleInput = (event) => {
  const { name, value } = event.target;

  setValues((prev) => ({
    ...prev,
    [name]: value,
  }));
};
/*const handleDelete = () => {
  const confirmDelete = window.confirm('Biztosan törölni szeretné ezt a kérdőívet?');
  if (!confirmDelete) {
    return;
  }
axios.delete(`http://localhost:8080/questionnaires/${questionId}`)
      .then(response => {
        console.log('Questionnaire deleted successfully:', response);
        navigate('/'); 
      })
      .catch(error => {
        console.error('Error deleting questionnaire:', error);
      });
  };*/

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
                <div className="Ques-div">
                <h3 className="newQues-label">{question.question1}</h3>
                <div className="Ques-options-container">
                  <input className='radioBtn' type='radio' name='option1' value={question.option1_1} onChange={handleInput}></input><p className="Ques-option">{question.option1_1}</p>
                  <input className='radioBtn' type='radio' name='option1' value={question.option1_2} onChange={handleInput}></input><p className="Ques-option">{question.option1_2}</p>
                  <input className='radioBtn' type='radio' name='option1' value={question.option1_3} onChange={handleInput}></input><p className="Ques-option">{question.option1_3}</p>
                  <input className='radioBtn' type='radio' name='option1' value={question.option1_4} onChange={handleInput}></input><p className="Ques-option">{question.option1_4}</p>
                </div>
                
                </div>
                <div className="Ques-div">
                <h3 className="newQues-label">{question.question2}</h3>
                <div className="Ques-options-container">
                  <input className='radioBtn' type='radio' name='option2' value={question.option2_1} onChange={handleInput}></input><p className="Ques-option">{question.option2_1}</p>
                  <input className='radioBtn' type='radio' name='option2' value={question.option2_2} onChange={handleInput}></input><p className="Ques-option">{question.option2_2}</p>
                  <input className='radioBtn' type='radio' name='option2' value={question.option2_3} onChange={handleInput}></input><p className="Ques-option">{question.option2_3}</p>
                  <input className='radioBtn' type='radio' name='option2' value={question.option2_4} onChange={handleInput}></input><p className="Ques-option">{question.option2_4}</p>
                </div>
                
                </div>
                <div className="Ques-div">
                <h3 className="newQues-label">{question.question3}</h3>
                <div className="Ques-options-container">
                  <input className='radioBtn' type='radio' name='option3' value={question.option3_1} onChange={handleInput}></input><p className="Ques-option">{question.option3_1}</p>
                  <input className='radioBtn' type='radio' name='option3' value={question.option3_2} onChange={handleInput}></input><p className="Ques-option">{question.option3_2}</p>
                  <input className='radioBtn' type='radio' name='option3' value={question.option3_3} onChange={handleInput}></input><p className="Ques-option">{question.option3_3}</p>
                  <input className='radioBtn' type='radio' name='option3' value={question.option3_4} onChange={handleInput}></input><p className="Ques-option">{question.option3_4}</p>
                </div>

                </div>
                <div className="Ques-div">
                <h3 className="newQues-label">{question.question4}</h3>
                <div className="Ques-options-container">
                  <input className='radioBtn' type='radio' name='option4' value={question.option4_1} onChange={handleInput}></input><p className="Ques-option">{question.option4_1}</p>
                  <input className='radioBtn' type='radio' name='option4' value={question.option4_2} onChange={handleInput}></input><p className="Ques-option">{question.option4_2}</p>
                  <input className='radioBtn' type='radio' name='option4' value={question.option4_3} onChange={handleInput}></input><p className="Ques-option">{question.option4_3}</p>
                  <input className='radioBtn' type='radio' name='option4' value={question.option4_4} onChange={handleInput}></input><p className="Ques-option">{question.option4_4}</p>
                </div>
                </div>
              
                    <button className='button' type='submit'>Kérdőív beküldése</button>
                </form>
        </div>
    ))}

      
      </div>
    </div>
  );
}
