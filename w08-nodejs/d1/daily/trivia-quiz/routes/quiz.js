const express = require('express');
const router = express.Router();


const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

let currentQuestionIndex = 0;
let score = 0;

// start the quiz 
router.get('/', (req, res) => {
  if (triviaQuestions.length === 0) {
    return res.status(404).send('No questions available.');
  }
  const question = triviaQuestions[currentQuestionIndex];
  res.json(question);
});

// submit an answer
router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;

  if (userAnswer === correctAnswer) {
    score++;
    res.send('Correct answer!');
  } else {
    res.send('Incorrect answer.');
  }

  currentQuestionIndex++;

  if (currentQuestionIndex >= triviaQuestions.length) {
    res.send(`Quiz finished! Your final score is ${score}`);
  } else {
    const nextQuestion = triviaQuestions[currentQuestionIndex];
    res.json(nextQuestion);
  }
});

// final score
router.get('/score', (req, res) => {
  res.json({ score });
});

module.exports = router;
