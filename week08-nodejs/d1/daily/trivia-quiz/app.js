const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const quizRouter = require('./routes/quiz');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'trivia_secret_key', 
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/quiz', quizRouter);

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
