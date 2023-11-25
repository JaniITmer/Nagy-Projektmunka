import React from 'react';
import './Register.css';



export default function Register() {
    return (
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
    )
}

