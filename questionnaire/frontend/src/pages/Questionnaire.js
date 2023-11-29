import React, { useState } from 'react';

export default function Questonnaire() {
    const [formData, setFormData] = useState({
      name: '',
      age: '',
      hobbies: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      console.log('Űrlap adatok:', formData);
    };
  
    return (
      <div>
        <h1>MyQuestonnaire Oldal</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Név:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Életkor:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Hobbik:
            <input
              type="text"
              name="hobbies"
              value={formData.hobbies}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Űrlap elküldése</button>
        </form>
      </div>
    );
  }