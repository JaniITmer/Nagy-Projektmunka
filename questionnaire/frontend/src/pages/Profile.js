import React, { useState } from 'react';
import './styles/Profile.css';

const Profile = ({ userEmail, username, password, onPasswordChange }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleOldPasswordChange = (event) => {
    const oldPasswordValue = event.target.value;
    setOldPassword(oldPasswordValue);
  };

  const handleNewPasswordChange = (event) => {
    const newPasswordValue = event.target.value;
    setNewPassword(newPasswordValue);
  };

  const handleUpdatePassword = () => {
    if (oldPassword && newPassword) {
      onPasswordChange({ oldPassword, newPassword });
      setOldPassword('');
      setNewPassword('');
    } else {
      console.error('Mindkét mezőt ki kell tölteni.');
    }
  };

  return (
      <div className='profil-oldal'>
        <div className='container'>
          <div className="header">
            <div className="h1">Profil</div>
            <div className="underline"></div>
          </div>
          <div className='userDatas'>
          <strong className="email">Felhasználó név:</strong> {username}
          </div>
          <div className='userDatas'>
            <strong className="email">Email cím:</strong> {userEmail}
          </div>

          {/*<form class="inputs" onChange={handleUpdatePassword}>
                        <h1 class="h2">Jelszó módosítás</h1>
                        <div class="input">
                            <label for="old_password">Régi jelszó</label>
                            <input
                                type="password"
                                id="old_password"
                                class="form-control"
                                value={oldPassword}
                                onChange={handleOldPasswordChange}
                            />
                        </div>

                        <div class="input">
                            <label for="new_password">Új jelszó</label>
                            <input
                                type="password"
                                id="new_password"
                                class="form-control"
                                value={newPassword}
                                onChange={handleNewPasswordChange}
                            />
                        </div>

                        <button type="submit" class="button">Update Password</button>
  </form>*/}
        </div>
      </div>
  );
};

export default Profile;