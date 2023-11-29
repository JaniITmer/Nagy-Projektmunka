import React from 'react';
import './styles/Profile.css';



export default function Profile() {
    return (
        <div className='profile-page'>
        <div className='szemelyes-adatok'> 
        
        <div className="card">

            <h1>Saját adatok</h1>

            <div className="card">Felhasználónév:
            <div>Felhasználónév megváltoztatása:</div>
            <div>
            <button className="pwchange-btn">Felhasznánév megváltoztatása </button>
            </div>
            </div>
           
            <div className="card">
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
             <div className='card'>Email cím:<div>Email cím megváltoztatása:</div>  <button>Email küldése</button></div>
            
            </div>

            <div className="card"> <h1>Kitöltött kérdőivek:</h1></div>
           
            </div>
         </div>
           
         
        
  
    )
}