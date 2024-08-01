const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// root path
app.get('/', (req, res) => {
  res.send('Trivia quiz');
});

// Import and use the quiz router
const quizRouter = require('./routes/quiz');
app.use('/quiz', quizRouter);

// Start server
app.listen(port, () => {
  console.log(`OK http://localhost:${port}/`);
});