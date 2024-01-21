const express = require("express");
const session = require("express-session");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();

app.use(
  session({
    secret: "secret-key",
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

var server = app.listen(8080, "127.0.0.1", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Listening on http://%s:%s", host, port);
});

// Regisztráció
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const sql =
      "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [req.body.username, req.body.email, hashedPassword];

    db.query(sql, values, (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
      return res.status(200).json(data);
    });
  } catch (error) {
    console.error("Error hashing password:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

const authenticateUser = (req, res, next) => {
  if (req.session.userId) {
    next();
  } else {
    res
      .status(401)
      .json({ error: "Hozzáférés megtagadva. Bejelentkezés szükséges." });
  }
};

// Bejelentkezés
app.post("/login", async (req, res) => {
  const sql = "SELECT * FROM users WHERE `email` = ?";
  db.query(sql, [req.body.email], async (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (data.length > 0) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        data[0].password
      );

      if (passwordMatch) {
        req.session.userId = data[0].id;
        req.session.email = data[0].email;
        req.session.username = data[0].username;

        return res.status(200).json({
          userId: data[0].id,
          email: data[0].email,
          username: data[0].username,
        });
      } else {
        return res
          .status(401)
          .json({ error: "Helytelen email cím vagy jelszó!" });
      }
    } else {
      return res
        .status(401)
        .json({ error: "Helytelen email cím vagy jelszó!" });
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
  console.log("Received check-email request:", req.method, req.url, req.headers);

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

// Új kérdőív hozzáadása
app.post("/new_questionnaire", authenticateUser, (req, res) => {
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
app.get("/questions", authenticateUser, (req, res) => {
  const sql = "SELECT * FROM questions";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "Hiba" });
    }
    return res.json(data);
  });
});

app.get("/questions/:id", authenticateUser, (req, res) => {
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
  SELECT answers.id AS id, user_id, answers.question_id, option1, option2, option3, option4, category, title, question1, question2, question3, question4, option1_1, option1_2, option1_3, option1_4, option2_1, option2_2, option2_3, option2_4, option3_1, option3_2, option3_3, option3_4, option4_1, option4_2, option4_3, option4_4
  FROM answers
  INNER JOIN questions ON answers.question_id = questions.id
  WHERE answers.user_id = ?;`;

  db.query(sql, [userId], (err, data) => {
    if (err) {
      return res.json({ Error: "Hiba" });
    }
    return res.json(data);
  });
});

// Kérdőív kitöltések száma (minden felhasználó)
app.get("/statistics-count", authenticateUser, (req, res) => {
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

// Kérdőív kitöltések (felhasználóé)
app.get("/statistics-all-count", authenticateUser, (req, res) => {
  const userId = req.session.userId;

  const sql = `
      SELECT COUNT(*) AS totalCount
      FROM answers
      WHERE user_id = ?;`;

  db.query(sql, [userId], (err, data) => {
    if (err) {
      return res.json({ Error: "Hiba" });
    }
    return res.json({
      totalCount: data[0].totalCount,
    });
  });
});

//Jelszó módosítás
app.post("/update-password", authenticateUser, async (req, res) => {
  const userId = req.session.userId;
  const { oldPassword, newPassword } = req.body;
  const getPasswordQuery = "SELECT password FROM users WHERE id = ?";
  db.query(getPasswordQuery, [userId], async (err, result) => {
    if (err) {
      console.error("Error querying database:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!result || result.length === 0) {
      return res.status(500).json({ error: "Felhasználó nem található az adatbázisban." });
    }
    const isPasswordCorrect = await bcrypt.compare(oldPassword, result[0].password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ error: "Helytelen régi jelszó!" });
    }
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    const updatePasswordQuery = "UPDATE users SET password = ? WHERE id = ?";
    db.query(updatePasswordQuery, [hashedNewPassword, userId], (updateErr, updateResult) => {
      if (updateErr) {
        console.error("Error updating password:", updateErr);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      return res.status(200).json({ message: "Jelszó sikeresen frissítve!" });
    });
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

  db.query(sqlInsert, insertValues, (err, result) => {
    if (err) {
      return res.json("Error");
    }

    return res.json(result);
  });
});

// Válasz lekérése
app.get("/answer/:id", authenticateUser, (req, res) => {
  const answerId = req.params.id;
  const sql = `
        SELECT *
        FROM answers
        JOIN questions ON answers.question_id = questions.id
        WHERE answers.id = ?`;

  db.query(sql, [answerId], (err, data) => {
    if (err) {
      return res.json({ Error: "Hiba" });
    }
    return res.json(data);
  });
});
