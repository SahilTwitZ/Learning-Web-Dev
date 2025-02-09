import express from "express";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "mebrpr0cyb",
  port: 5432,
});
db.connect();

let quiz;
let totalCorrect = 0;
let currentQuestion = {};

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Fetch quiz data and start server
db.query("SELECT * FROM flags", (err, res) => {
  if (err) {
    console.log("Error executing query", err.stack);
  } else {
    quiz = res.rows;
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  }
});

// GET home page
app.get("/", (_, res) => {
  totalCorrect = 0;
  nextQuestion();
  res.render("index.ejs", { question: currentQuestion });
});

// POST a new answer
app.post("/submit", (req, res) => {
  let answer = (req.body.answer || "").trim();
  let isCorrect = false;

  if (currentQuestion.capital?.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++;
    isCorrect = true;
  }

  nextQuestion();
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  });
});

function nextQuestion() {
  if (!quiz || quiz.length === 0) {
    currentQuestion = { capital: "No data available", country: "Unknown" };
  } else {
    currentQuestion = quiz[Math.floor(Math.random() * quiz.length)];
  }
}
