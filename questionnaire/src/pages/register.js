import React from 'react';
import './Register.css';



export default function Register() {
    return (
    
        <div className="form">
        <div className="form-body">
          
            <div className="fullname">
                <label className="form__label" for="fullname">Teljes név: </label>
                <input  type="text" name="" id="fullname"  className="form__input"placeholder="teljes név"/>
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
        </div>
        <div class="footer">
            <button class="btn" type="submit"  variant="outlined">Regisztráció</button>
        </div>
    </div>      
    )
}

