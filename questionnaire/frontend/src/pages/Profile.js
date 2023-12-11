import React, { useState } from 'react';
import './styles/Profile.css';

const Profile = ({ userEmail, username, onImageChange }) => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
      onImageChange(file);
    };

    return (
        <div className='profil-oldal'>
          <div className='left-panel'>
            <h2 className='header'>Profil</h2>
            <div>
              <strong className="profilkep">Profilkép:</strong>
              {selectedImage ? (
                <img className="img"
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected Avatar"
                  style={{ maxWidth: '200px', maxHeight: '200px' }}
                />
              ) : (
                'Nincs kiválasztva profilkép'
              )}
            </div>
            <input type="file" onChange={handleImageChange} accept="image/*" className="file-input" />
          </div>
          <div className='right-panel'>
            <div>
              <strong className="felhasznalonev">Felhasználónév:</strong> {username}
            </div>
            <div>
              <strong className="email">Email cím:</strong> {userEmail}
            </div>
          </div>
        </div>
      );
    
    };

export default Profile;