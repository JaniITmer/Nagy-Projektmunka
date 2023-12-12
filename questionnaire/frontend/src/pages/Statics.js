

import React, { useState, useEffect } from 'react';

import axios from 'axios';

export default function Statics({ loggedIn, userEmail}) {
  const [statics, setStatics] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:8080/statics')
      .then(response => {
        setStatics(response.data);
      })
      .catch(error => {
        console.error('Error fetching statics:', error);
      });
    
  }, [loggedIn]);

  return (
    <div className="statics-page">
      
        <div className="topics">
          <h1>Kitöltött kérdőívek</h1>
          {statics.map(stat => (
            <div key={stat.statistic_id} className="card">
              <h2>{stat.question_count}</h2>
             
            </div>
          ))}
          
        </div>
    
    </div>
  );
}

