import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Statics({ loggedInUserId }) {
  const [filledQuestionnaires, setFilledQuestionnaires] = useState(0);

  useEffect(() => {
    console.log('loggedInUserId:', loggedInUserId);

    const fetchData = async () => {
        try {
          const responseFilledQuestionnaires = await axios.get(`http://localhost:8080/filled-questionnaires/${loggedInUserId}`);
          
            setFilledQuestionnaires(responseFilledQuestionnaires.data.filledQuestionnaires);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, [loggedInUserId]);

  return (
    <div className="statics-page">
      <div className="topics">
        <h1>Kitöltött kérdőívek</h1>
        <div className="card">
          <h2>{filledQuestionnaires}</h2>
        </div>
      </div>
    </div>
  );
}