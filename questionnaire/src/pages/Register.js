import React, {useState} from 'react';
import './Register.css';
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
    )
}

