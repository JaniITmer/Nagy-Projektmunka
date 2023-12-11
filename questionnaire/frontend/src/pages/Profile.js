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
        <div>
          <h2>Profil</h2>
          <div>
            <strong>Email cím:</strong> {userEmail}
          </div>
          <div>
            <strong>Felhasználónév:</strong> {username}
          </div>
          <div>
            <strong>Profilkép:</strong>
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Avatar"
                style={{ maxWidth: '200px', maxHeight: '200px' }}
              />
            ) : (
              'Nincs kiválasztva profilkép'
            )}
          </div>
          <input type="file" onChange={handleImageChange} accept="image/*" />
        </div>
      );
    };

export default Profile;