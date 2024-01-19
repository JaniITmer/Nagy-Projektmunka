const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(
  session({
    secret: "your-secret-key",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "questionnaire_db",
});

// Regisztráció
app.post("/register", (req, res) => {
  const sql = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
  const values = [req.body.username, req.body.email, req.body.password];
  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

const authenticateUser = (req, res, next) => {
  if (req.session.userId) {
    // User is authenticated, move to the next middleware or route handler
    next();
  } else {
    // User is not authenticated, send an unauthorized response
    res.status(401).json({ error: "Unauthorized" });
  }
};

// Bejelentkezés
app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    if (data.length > 0) {
      req.session.userId = data[0].id;
      req.session.email = data[0].email;
      req.session.username = data[0].username;

      //Bejelentkezett felhasználó id-je
      return res.json({
        userId: data[0].id,
        email: data[0].email,
        username: data[0].username,
      });
    } else {
      return res.json("Failed");
    }
  });
});

// Kijelentkezés
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: "Hiba a kijelentkezés során" });
    }

    res.json({ message: "Sikeres kijelentkezés" });
  });
});

// E-mail ellenőrzése
app.get("/check-email/:email", (req, res) => {
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
db.query(
  `
    CREATE TABLE IF NOT EXISTS Questionnaires (
        questionnaire_id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`,
  (err) => {
    if (err) {
      console.error("Error creating Questionnaires table:", err);
    } else {
      console.log("Questionnaires table created or already exists");
    }
  }
);

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

app.post("/new_questionnaire", (req, res) => {
  var postData = req.body;
  db.query(
    "INSERT INTO questions SET ?",
    postData,
    function (error, results, fields) {
      if (error) {
        return res
          .status(500)
          .json({ error: "Az adatok beszúrása közben hiba történt" });
      }
      res.status(200).json(results);
    }
  );
});

//Kérdőívek megjelenítése
app.get("/questions", (req, res) => {
  const sql = "SELECT * FROM questions";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Hiba" });
    }
    return res.json(data);
  });
});

app.get("/questions/:id", (req, res) => {
  const questionId = req.params.id;
  const sql = "SELECT * FROM questions WHERE id = ?";

  db.query(sql, [questionId], (err, data) => {
    if (err) {
      return res.json({ Error: "Hiba" });
    }
    return res.json(data);
  });
});

//Statiszika megjelenítése
app.get("/statistics", authenticateUser, (req, res) => {
  const userId = req.session.userId;

  const sql = `
      SELECT * FROM answers
      INNER JOIN questions ON answers.question_id = questions.id
      WHERE answers.user_id = ?`;

  db.query(sql, [userId], (err, data) => {
    if (err) {
      return res.json({ Error: "Hiba" });
    }
    return res.json(data);
  });
});

// Kitöltések száma
app.get("/statistics-count", (req, res) => {
  const sql = `
      SELECT question_id, COUNT(*) AS fillCount
      FROM answers
      GROUP BY question_id`;

  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error querying database:", err);
      return res.json({ Error: "Hiba" });
    }
    return res.json(data);
  });
});

//Kérdések listázása
app.get("/questions/:id", (req, res) => {
  const { questionId } = req.params;
  const sql = "SELECT * FROM questions WHERE id = ?";
  db.query(sql, [questionId], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

//Válaszok listázása
app.get("/answers/:id", (req, res) => {
  const { questionId } = req.params;
  const sql = "SELECT * FROM questions WHERE id = ?";
  db.query(sql, [questionId], (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});

//Válasz beküldése
app.post("/answer/:questionId", authenticateUser, (req, res) => {
  const { questionId } = req.params;
  const sqlInsert =
    "INSERT INTO answers (`user_id`, `question_id`, `option1`, `option2`, `option3`, `option4`) VALUES (?, ?, ?, ?, ?, ?)";
  const insertValues = [
    req.session.userId,
    questionId,
    req.body.option1,
    req.body.option2,
    req.body.option3,
    req.body.option4,
  ];

  // Insert az answers táblába
  db.query(sqlInsert, insertValues, (err, result) => {
    if (err) {
      return res.json("Error");
    }

    const answerId = result.insertId;

    // Frissítés a statistics táblában
    const sqlUpdate = `
          INSERT INTO statistics (answer_id, answer_count)
          VALUES (?, 1)
          ON DUPLICATE KEY UPDATE answer_count = answer_count + 1;`;

    db.query(sqlUpdate, [questionId], (errUpdate, resultUpdate) => {
      if (errUpdate) {
        return res.json("Error updating statistics");
      }

      return res.json(resultUpdate);
    });
  });
});

/*
app.post("/answer/:questionId", authenticateUser, (req, res) => {
  const { questionId } = req.params;
  const sql =
    "INSERT INTO answers (`user_id`, `question_id`, `option1`, `option2`, `option3`, `option4`) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [
    req.session.userId,
    questionId,
    req.body.option1,
    req.body.option2,
    req.body.option3,
    req.body.option4,
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json("Error");
    }
    return res.json(data);
  });
});
*/

app.listen(8080, () => {
  console.log("listening");
});
