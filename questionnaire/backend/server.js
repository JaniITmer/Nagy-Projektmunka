const express = require("express");
const mysql = require('mysql');
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

// Regisztráció
app.post('/register', (req, res) =>{
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


// Bejelentkezés
app.post('/users', (req, res) =>{
    const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if (data.length > 0) {
            //Bejelentkezett felhasználó id-je
            return res.json({ userId: data[0].id });
        } else {
            return res.json("Failed");
        }
    })
    
})

// E-mail ellenőrzése
app.get('/check-email/:email', (req, res) => {
    const email = req.params.email;
    const sql = "SELECT * FROM users WHERE `email` = ?";
    db.query(sql, [email], (err, data) => {
        if (err) {
            console.error("Error checking email:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        if (data.length > 0) {
            return res.json({ exists: true });
        } else {
            return res.json({ exists: false });
        }
    });
});

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
/*
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
*/

//----------------------------------------------


/*app.post('/new_questionnaire', (req, res) =>{
    const sql = "INSERT INTO questions (`title`, `question1`, `question2`, `question3`, `question4`) VALUES (?)";
    const values = [
        req.body.title,
        req.body.question1,
        req.body.question2,
        req.body.question3,
        req.body.question4
    ];
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data); 
    })
    
})
<<<<<<< HEAD

//Kérdőívek megjelenítése
app.get('/questionnaires', (req, res) => {
    const sql = "SELECT * FROM questions";
    db.query(sql, (err, data) => {
      if (err) {
        return res.json("Error");
      }
      return res.json(data);
    });
  });

//Kérdések listázása
app.get('/questions/:questionId', (req, res) => {
    const { questionId } = req.params;
    const sql = "SELECT * FROM questions WHERE question_id = ?";
    db.query(sql, [questionId], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});


//Válaszok listázása
app.get('/answers/:questionId', (req, res) => {
    const { questionId } = req.params;
    const sql = "SELECT * FROM questions WHERE question_id = ?";
    db.query(sql, [questionId], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    });
});

=======
>>>>>>> 2a2c58cb205dddf72e44cd8a3d359657319841cd
//Válasz beküldése
app.post('/answer', (req, res) => {
    const sql = "INSERT INTO answers (`user_id`, `question_id`, `option1`, `option2`, `option3`, `option4`) VALUES (?)";
    const values = [
        16,//req.body.userId,
        req.body.question_id,
        req.body.option1,
        req.body.option2,
        req.body.option3,
        req.body.option4
    ];
    console.log(values);
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
<<<<<<< HEAD
        return res.json(data);
    });
});

=======
        return res.json(data); 
    })
    
})
//---
// Adatbázis kapcsolat konfiguráció*/
>>>>>>> 2a2c58cb205dddf72e44cd8a3d359657319841cd


app.listen(8080, () => {
    console.log("listening");
})