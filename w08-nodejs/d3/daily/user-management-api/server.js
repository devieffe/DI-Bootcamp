const express = require('express');
const bcrypt = require('bcrypt');
const jsonfile = require('jsonfile');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

const usersFile = path.join(__dirname, 'users.json');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve HTML files
app.use(express.static(path.join(__dirname)));



const readUsers = () => {
  if (!fs.existsSync(usersFile)) {
    return [];
  }
  return jsonfile.readFileSync(usersFile);
};



const writeUsers = (data) => {
  jsonfile.writeFileSync(usersFile, data, { spaces: 2 });
};

// POST /register
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Missing username or password');
  }

  const users = readUsers();
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).send('Username already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now(),
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  writeUsers(users);

  res.send('User registered successfully');
});

// POST /login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('Missing username or password');
  }

  const users = readUsers();
  const user = users.find(user => user.username === username);
  if (!user) {
    return res.status(401).send('Invalid username or password');
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(401).send('Invalid username or password');
  }

  res.send('Login successful');
});

// GET /users
app.get('/users', (req, res) => {
  const users = readUsers();
  res.json(users);
});

// GET /users/:id
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  const users = readUsers();
  const user = users.find(user => user.id == id);
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});

// PUT /users/:id
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  const users = readUsers();
  const index = users.findIndex(user => user.id == id);
  if (index === -1) {
    return res.status(404).send('User not found');
  }
  
  if (username) {
    users[index].username = username;
  }
  if (password) {
    users[index].password = bcrypt.hashSync(password, 10);
  }
  writeUsers(users);
  res.send('User updated successfully');
});


app.listen(port, () => {
  console.log(`OK http://localhost:${port}`);
});
