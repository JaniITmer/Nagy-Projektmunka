import React, {useState} from 'react';
import './styles/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import user_icon from '../images/username.png'
import passwd_icon from '../images/password.png'

export default function Login() {
    const [values, setValues] = useState({

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
        axios.post('http://localhost:8081/users', values)
            .then(res => {
                if(res.data === "Success") {
                    navigate('/');
                } else {
                    alert("Hibás felhasználónév vagy jelszó!");
                }

                console.log("siker");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='login-page'>
            <div className='container'>
                <div className='header'>
                    <div className='h1'>Bejelentkezés</div>
                    <div className='underline'></div>
                </div>
                <form className="inputs" action="" onSubmit={handleSubmit}>
                    <div className='input'>
                        <img src={user_icon} alt=''/>
                        <input type="email" placeholder='Enter Email' name='email'
                        onChange={handleInput}/>
                    </div>
                    <div className='input'>
                        <img src={passwd_icon} alt=''/>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange={handleInput}/>
                    </div>
                    <button className='button' type='submit'>Bejelentkezés</button>
                </form>
            </div>
        </div>
    )
}

