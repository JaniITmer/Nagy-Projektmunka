import React, {useState} from 'react';
import './styles/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import user_icon from '../images/username.png'
import passwd_icon from '../images/password.png'

export default function NewQuestionnaire() {
    const [values, setValues] = useState({
        title: '',
        question1: '',
        question2: '',
        question3: '',
        question4: ''
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
            axios.post('http://localhost:8082/new_questionnaire', values)
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
                    <div className="question1">
                            <label className="form__label" htmlFor="question1">Kérdés1</label>
                            <input  type="text" id="question1" className="form__input" placeholder="kérdés1" 
                            name="question1" onChange={handleInput}/>
                        </div>
                    <div className="question2">
                            <label className="form__label" htmlFor="question2">Kérdés2</label>
                            <input  type="text" id="question2" className="form__input" placeholder="kérdés2" 
                            name="question2" onChange={handleInput}/>
                        </div>
                    <div className="question3">
                            <label className="form__label" htmlFor="question3">Kérdés3</label>
                            <input  type="text" id="question3" className="form__input" placeholder="kérdés3" 
                            name="question3" onChange={handleInput}/>
                        </div>
                    <div className="question4">
                            <label className="form__label" htmlFor="question4">Kérdés4</label>
                            <input  type="text" id="question4" className="form__input" placeholder="kérdés4" 
                            name="question4" onChange={handleInput}/>
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
