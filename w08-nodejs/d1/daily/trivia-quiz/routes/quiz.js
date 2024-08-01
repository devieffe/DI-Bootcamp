const express = require('express');
const router = express.Router();

const triviaQuestions = [
  {
    question: 'What is the capital of France?',
    answer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answer: 'Mars',
  },
  {
    question: 'What is the largest mammal in the world?',
    answer: 'Blue whale',
  },
];

router.get('/', (req, res) => {
  req.session.score = 0;
  req.session.currentQuestionIndex = 0;
  res.redirect('/quiz/question');
});


router.get('/question', (req, res) => {
  const index = req.session.currentQuestionIndex;

  if (index >= triviaQuestions.length) {
    return res.redirect('/quiz/score');
  }

  const question = triviaQuestions[index].question;
  res.send(`
    <h1>Trivia Quiz</h1>
    <form action="/quiz" method="post">
      <p>${question}</p>
      <input type="text" name="answer" required />
      <button type="submit">Submit</button>
    </form>
  `);
});


router.post('/', (req, res) => {
  const userAnswer = req.body.answer.trim();
  const index = req.session.currentQuestionIndex;
  const correctAnswer = triviaQuestions[index].answer;

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    req.session.score++;
    req.session.currentQuestionIndex++;
    res.send(`
      <p>Correct! Your score is now ${req.session.score}</p>
      <a href="/quiz/question">Next Question</a>
    `);
  } else {
    req.session.currentQuestionIndex++;
    res.send(`
      <p>Incorrect. The correct answer was: ${correctAnswer}</p>
      <a href="/quiz/question">Next Question</a>
    `);
  }
});


router.get('/score', (req, res) => {
  const score = req.session.score;
  const totalQuestions = triviaQuestions.length;

  res.send(`
    <h1>Quiz Complete!</h1>
    <p>Your final score is ${score} out of ${totalQuestions}.</p>
    <a href="/quiz">Play Again</a>
  `);
});

module.exports = router;
