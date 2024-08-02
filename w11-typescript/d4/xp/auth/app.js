const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.json());

const authRouter = require('./authRouter');
const authenticateJWT = require('./authMiddleware');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/auth', authRouter);

app.get('/protected', authenticateJWT, (req, res) => {
  res.send('This is a protected route');
});

app.listen(port, () => {
  console.log(`OK http://localhost:${port}`);
});
