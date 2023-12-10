import React from 'react';
import './styles/Profile.css';



export default function Profile() {
    return (
        <div className='profile-page'>
        <div className='szemelyes-adatok'> 
        
        <div className="profil-adatok">

            <h1 className='profil-cim'>Saját adatok</h1>

            <div className="profil-username">Felhasználónév:
            <div>Felhasználónév megváltoztatása:</div>
            <div>
            <button className="namechange-btn">Felhasználónév megváltoztatása </button>
            </div>
            </div>
           
            <div className="profile-card-jelszo card">
            <div >Jelszó módosítása</div>

            <div >Adja meg a jelenleg használt jelszavát :
            <input type='password' id="currentPassword" placeholder="Jelenlegi jelszó"></input>
            </div>
            <div >Adja meg a az új jelszavát :
            <input type='password' id="newPassword" placeholder="Új jelszó"></input>
            </div>
            <div >Adja meg a az új jelszavát ismét :
            <input type='password' id="newPasswordagain" placeholder="Új jelszó"></input>
            </div>


          
            
            <div>


             <button className="pwchange-btn">Jelszó megváltoztatása </button></div>
             </div>
             <div className='card profile-email'>Email cím:<div>Email cím megváltoztatása:</div>  <button className='profile-email-button'>Email küldése</button></div>
            
            </div>

            <div className="card profil-kerdoiv"> <h1>Kitöltött kérdőivek:</h1></div>
           
            </div>
         </div>
           
         
        
  
    )
}