import './Login.css';

import user_icon from '../images/username.png'
import passwd_icon from '../images/password.png'

export default function Login() {
    return (
        <div className='login-page'>
        <div className="container"> 
            <div className='header'>
                <div className='h1'>Bejelentkezés</div>
                <div className='underline'></div>
            </div>
                <div className='inputs'>
                    <div className='input'>
                        <img src={user_icon} alt=''/>
                        <input type="text" placeholder="Felhasználónév" className="control"/>
                    </div>
                    <div className='input'>
                        <img src={passwd_icon} alt=''/>
                        <input type="password" placeholder="Jelszó" className="control"/>
                    </div>
                </div>
            <div className="submit">
            <button className="button">Bejelentkezés</button>
            </div>
        </div>
        </div>
    )
}
