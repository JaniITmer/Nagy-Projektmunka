import React, {useState} from 'react';
import './styles/Register.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {basic_eye} from 'react-icons-kit/linea/basic_eye'
import {basic_eye_closed} from 'react-icons-kit/linea/basic_eye_closed'
import {arrows_exclamation} from 'react-icons-kit/linea/arrows_exclamation'
import {arrows_circle_check} from 'react-icons-kit/linea/arrows_circle_check'



export default function Register() {


    const [lowerValidated, setLowerValidated]=useState(false);
    const [upperValidated, setUpperValidated]=useState(false);
    const [numberValidated, setNumberValidated]=useState(false);
    const [specialValidated, setSpecialValidated]=useState(false);
    const [lengthValidated, setLengthValidated]=useState(false);

    const handleChange=(value)=>{
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})')
        if(lower.test(value)){
          setLowerValidated(true);
        }
        else{
          setLowerValidated(false);
        }
        if(upper.test(value)){
          setUpperValidated(true);
        }
        else{
          setUpperValidated(false);
        }
        if(number.test(value)){
          setNumberValidated(true);
        }
        else{
          setNumberValidated(false);
        }
        if(special.test(value)){
          setSpecialValidated(true);
        }
        else{
          setSpecialValidated(false);
        }
        if(length.test(value)){
          setLengthValidated(true);
        }
        else{
          setLengthValidated(false);
        }
      }

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
        axios.post('http://localhost:8082/questionnaire_db', values)
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
                            name="password" onChange={(e)=>handleChange(e.target.value)}handleInput/>
                           {type==="password"?(
            <span className='icon-span' onClick={()=>setType("text")}>
              <Icon icon={basic_eye_closed} size={18}/>
            </span>
          ):(
            <span className='icon-span' onClick={()=>setType("password")}>
              <Icon icon={basic_eye} size={18}/>
            </span>
          )}

<main className='tracker-box'>
          <div className={lowerValidated?'validated':'not-validated'}>
            {lowerValidated?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least one lowercase letter
          </div>
          <div className={upperValidated?'validated':'not-validated'}>
            {upperValidated?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least one uppercase letter
          </div>
          <div className={numberValidated?'validated':'not-validated'}>
            {numberValidated?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least one number
          </div>
          <div className={specialValidated?'validated':'not-validated'}>
            {specialValidated?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least one special character
          </div>
          <div className={lengthValidated?'validated':'not-validated'}>
            {lengthValidated?(
              <span className='list-icon green'>
                <Icon icon={arrows_circle_check}/>  
              </span>
            ):(
              <span className='list-icon'>
                <Icon icon={arrows_exclamation}/>  
              </span>
            )}
            At least 8 characters
          </div>
        </main>
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

