const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "questionnaire_db"
})

app.post('/questionnaire_db', (req, res) =>{
    const sql = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.username,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data); 
    })
    
})

app.post('/users', (req, res) =>{
    const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    })
    
})

// Kérdőívek tábla létrehozása, ha még nem létezik
db.query(`
    CREATE TABLE IF NOT EXISTS Questionnaires (
        questionnaire_id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
    if (err) {
        console.error("Error creating Questionnaires table:", err);
    } else {
        console.log("Questionnaires table created or already exists");
    }
});


// Új kérdőív hozzáadása
app.post('/questionnaires', (req, res) => {
    const { title } = req.body;
    const sql = "INSERT INTO Questionnaires (title) VALUES (?)";
    db.query(sql, [title], (err, data) => {
        if (err) {
            console.error("Error adding questionnaire:", err);
            return res.json("Error");
        }
        console.log("Questionnaire added:", data);
        return res.json(data);
    });
});



app.listen(8081, () => {
    console.log("listening");
})