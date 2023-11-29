import React, {useState} from 'react';
import './styles/Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function Register() {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    //const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //setErrors(validation(values));
        /*if(errors.name === "" && errors.email === "" && errors.password === ""){
            
        }*/
        axios.post('http://localhost:8081/questionnaire_db', values)
            .then(res => {
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='register-page'>
            <div>
                <div className='header'>
                    <form className="form-body red-rounded-border" action="" onSubmit={handleSubmit}>
                        <div className='cim'>Ahhoz hogy kérdőívet tudjon kitölteni regisztráljon itt egy új fiókot</div>
                        <div className="username">
                            <label className="form__label" htmlFor="username">Teljes név: </label>
                            <input  type="text" id="username"  className="form__input" placeholder="felhasználónév" 
                            name="username" onChange={handleInput}/>
                        </div>
                        <div className="email">
                            <label className="form__label" htmlFor="email">Email cím:</label>
                            <input  type="email" id="email" className="form__input" placeholder="Email"
                            name="email" onChange={handleInput}/>
                        </div>
                        <div className="password">
                            <label className="form__label" htmlFor="password">Jelszó: </label>
                            <input className="form__input" type="password"  id="password" placeholder="Jelszó"
                            name="password" onChange={handleInput}/>
                        </div>
                        <div className="confirm-password">
                            <label className="form__label" htmlFor="confirmPassword">Jelszó megerősítése </label>
                            <input className="form__input" type="password" id="confirmPassword" placeholder="Jelszó megerősítése"
                            name="password" onChange={handleInput}/>
                        </div>
                        <div className="footer">
                            <button className="button" type="submit"  variant="outlined">Regisztráció</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
    )
}

