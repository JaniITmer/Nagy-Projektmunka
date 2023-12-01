import React, { useState } from 'react';

export default function MyQuestionnaire() {
    const [title, setTitle] = useState('');
    const [questions, setQuestions] = useState([]);

    const addQuestion = () => {
        setQuestions([...questions, '']);
    };

    const handleQuestionChange = (index, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index] = value;
        setQuestions(updatedQuestions);
    };

    const saveQuestionnaire = () => {
        // Itt további lépéseket tehetsz a mentéshez, például AJAX kérést küldhetsz a szervernek.
        console.log('Kérdőív címe:', title);
        console.log('Kérdések:', questions);
    };

    return (
        <div>
            <label htmlFor="questionnaireTitle">Kérdőív címe:</label>
            <input
                type="text"
                id="questionnaireTitle"
                placeholder="Kérdőív címe"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={addQuestion}>+</button>

            <div id="questionsContainer">
                {questions.map((question, index) => (
                    <div key={index}>
                        <label htmlFor={`question${index + 1}`}>{`Kérdés ${index + 1}:`}</label>
                        <input
                            type="text"
                            className="questionInput"
                            id={`question${index + 1}`}
                            placeholder="Írja be a kérdést"
                            value={question}
                            onChange={(e) => handleQuestionChange(index, e.target.value)}
                        />
                    </div>
                ))}
            </div>

            <button onClick={saveQuestionnaire}>Mentés</button>
        </div>
    );
}