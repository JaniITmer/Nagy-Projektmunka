import React, {useState} from 'react';
import './styles/NewQuestionnaire.css';
import './styles/Login.css';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function NewQuestionnaire() {
    const [values, setValues] = useState({
        title: '',
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        option1_1: '',
        option1_2: '',
        option2_1: '',
        option2_2: '',
        option3_1: '',
        option3_2: '',
        option4_1: '',
        option4_2: ''
    })
    const navigate = useNavigate();
    //const [errors, setErrors] = useState({})
    /*const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }*/
    const handleInput = (event) => {
        const { name, value } = event.target;
    
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //setErrors(validation(values));
            axios.post('http://localhost:8080/new_questionnaire', values)
            .then(res => {
                navigate('/');
                console.log(res);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="main-page">
      <div className="topics">
        <h1>Új kérdőív hozzáadása</h1>
        
        <form className="inputs" action="" onSubmit={handleSubmit}>
                <div className="title">
                            <label className="form__label" htmlFor="title">Cím</label>
                            <input  type="text" id="title"  className="form__input" placeholder="cím" 
                            name="title" onChange={handleInput}/>
                        </div>
                <div className="newQues-div2">
                    <div className="question1">
                            <label className="form__label" htmlFor="question1">Kérdés1</label>
                            <input  type="text" id="question1" className="form__input" placeholder="kérdés1" 
                            name="question1" onChange={handleInput}/>
                        </div>
                        <div className="option1_1">
                            <label className="form__label" htmlFor="option1_1">Válasz1_1</label>
                            <input  type="text" id="option1_1" className="form__input" placeholder="válasz1_1" 
                            name="option1_1" onChange={handleInput}/>
                        </div>
                        <div className="option1_2">
                            <label className="form__label" htmlFor="option1_2">Válasz1_2</label>
                            <input  type="text" id="option1_2" className="form__input" placeholder="válasz1_2" 
                            name="option1_2" onChange={handleInput}/>
                        </div>
                </div>
                <div className="newQues-div2">
                    <div className="question2">
                            <label className="form__label" htmlFor="question2">Kérdés2</label>
                            <input  type="text" id="question2" className="form__input" placeholder="kérdés2" 
                            name="question2" onChange={handleInput}/>
                        </div>
                        <div className="option2_1">
                            <label className="form__label" htmlFor="option2_1">Válasz2_1</label>
                            <input  type="text" id="option2_1" className="form__input" placeholder="válasz2_1" 
                            name="option2_1" onChange={handleInput}/>
                        </div>
                        <div className="option2_2">
                            <label className="form__label" htmlFor="option2_2">Válasz2_2</label>
                            <input  type="text" id="option2_2" className="form__input" placeholder="válasz2_2" 
                            name="option2_2" onChange={handleInput}/>
                        </div>
                    </div>
                <div className="newQues-div2">
                    <div className="question3">
                            <label className="form__label" htmlFor="question3">Kérdés3</label>
                            <input  type="text" id="question3" className="form__input" placeholder="kérdés3" 
                            name="question3" onChange={handleInput}/>
                        </div>
                        <div className="option3_1">
                            <label className="form__label" htmlFor="option3_1">Válasz3_1</label>
                            <input  type="text" id="option3_1" className="form__input" placeholder="válasz3_1" 
                            name="option3_1" onChange={handleInput}/>
                        </div>
                        <div className="option3_2">
                            <label className="form__label" htmlFor="option3_2">Válasz3_2</label>
                            <input  type="text" id="option3_2" className="form__input" placeholder="válasz3_2" 
                            name="option3_2" onChange={handleInput}/>
                        </div>
                </div>
                <div className="newQues-div2">
                    <div className="question4">
                            <label className="form__label" htmlFor="question4">Kérdés4</label>
                            <input  type="text" id="question4" className="form__input" placeholder="kérdés4" 
                            name="question4" onChange={handleInput}/>
                        </div>
                        <div className="option4_1">
                            <label className="form__label" htmlFor="option4_1">Válasz4_1</label>
                            <input  type="text" id="option4_1" className="form__input" placeholder="válasz4_1" 
                            name="option4_1" onChange={handleInput}/>
                        </div>
                        <div className="option4_2">
                            <label className="form__label" htmlFor="option4_2">Válasz4_2</label>
                            <input  type="text" id="option4_2" className="form__input" placeholder="válasz4_2" 
                            name="option4_2" onChange={handleInput}/>
                        </div>
                </div>
                    <button className='button' type='submit'>Kérdőív hozzáadása</button>
                </form>

      </div>
      <div className="main-page-info">
        <h1>Jelenleg vendég módban van!</h1>
        <h1>A kérdőívek kitöltéséhez jelentkezzen be!</h1>
      </div>
    </div>
    )
}
