CREATE TABLE Questionnaires (
    questionnaire_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE Questions (
    question_id SERIAL PRIMARY KEY,
    questionnaire_id INTEGER REFERENCES Questionnaires(questionnaire_id),
    question_text TEXT NOT NULL
);


CREATE TABLE Answers (
    answer_id SERIAL PRIMARY KEY,
    question_id INTEGER REFERENCES Questions(question_id),
    respondent_name VARCHAR(255) NOT NULL,
    response_text TEXT NOT NULL
);



/*INSERT INTO Questionnaires (title, created_at) VALUES
    ('Első kérdőív', '2023-01-01 10:00'),
    ('Második kérdőív', '2023-01-02 12:30');

INSERT INTO Questions (questionnaire_id, question_text) VALUES
    (1, 'Hogyan értékeli az előadást?'),
    (1, 'Mi volt a kedvenc része?'),
    (2, 'Mennyire volt hasznos?');


INSERT INTO Answers (question_id, respondent_name, response_text) VALUES
    (1, 'Péter', 'Nagyon jó volt'),
    (1, 'Anna', 'Átlagosnak éreztem'),
    (2, 'Péter', 'A zárójeles rész volt a legjobb'),
    (3, 'Anna', 'Nagyon hasznos volt');*/