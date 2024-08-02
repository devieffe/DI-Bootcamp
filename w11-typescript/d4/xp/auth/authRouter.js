const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const users = {}; // This will serve as our in-memory user store

const JWT_SECRET = 'your-secret-key';
const JWT_EXPIRES_IN = '1h';


router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send('Username and password are required');
  if (users[username]) return res.status(400).send('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  users[username] = { password: hashedPassword };
  res.status(201).send('User registered');
});


const JWT_REFRESH_SECRET = 'your-refresh-secret';
const JWT_REFRESH_EXPIRES_IN = '7d'; // Longer expiration for refresh tokens

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (!user || !await bcrypt.compare(password, user.password)) return res.status(400).send('Invalid credentials');

  const accessToken = jwt.sign({ username }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  const refreshToken = jwt.sign({ username }, JWT_REFRESH_SECRET, { expiresIn: JWT_REFRESH_EXPIRES_IN });

  res.cookie('accessToken', accessToken, { httpOnly: true });
  res.cookie('refreshToken', refreshToken, { httpOnly: true });
  res.send('Login successful');
});


router.post('/refresh', (req, res) => {
    const { refreshToken } = req.cookies;
    if (!refreshToken) return res.sendStatus(401);
  
    jwt.verify(refreshToken, JWT_REFRESH_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
  
      const accessToken = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
      res.cookie('accessToken', accessToken, { httpOnly: true });
      res.send('Token refreshed');
    });
  });  

  
router.post('/logout', (req, res) => {
    res.clearCookie('token').send('Logout successful');
});
  

module.exports = router;
