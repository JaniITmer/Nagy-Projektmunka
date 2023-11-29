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
                console.log("siker");
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="username">Name</label>
                        <input type="text" placeholder='Felhasználónév' name='username'
                        onChange={handleInput}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Email' name='email'
                        onChange={handleInput}/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Jelszó' name='password'
                        onChange={handleInput}/>
                    </div>
                    <button type='submit'>Regisztráció</button>
                </form>
            </div>
        </div>
        /*
        <div className='register-page'>
            <div className="form">
                <div className='header'>
                    <div className="form-body red-rounded-border">
                        <div className='cim'>Ahhoz hogy kérdőívet tudjon kitölteni regisztráljon itt egy új fiókot</div>
                        <div className="username">
                            <label className="form__label" for="username">Teljes név: </label>
                            <input  type="text" name="" id="username"  className="form__input" placeholder="felhasználónév"/>
                        </div>
                        <div className="email">
                            <label className="form__label" for="email">Email cím:</label>
                            <input  type="email" id="email" className="form__input" placeholder="Email"/>
                        </div>
                        <div className="password">
                            <label className="form__label" for="password">Jelszó: </label>
                            <input className="form__input" type="password"  id="password" placeholder="Jelszó"/>
                        </div>
                        <div className="confirm-password">
                            <label className="form__label" for="confirmPassword">Jelszó megerősítése </label>
                            <input className="form__input" type="password" id="confirmPassword" placeholder="Jelszó megerősítése"/>
                        </div>
                        <div class="footer">
                            <button className="button" class="btn" type="submit"  variant="outlined">Regisztráció</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        */        
    )
}

