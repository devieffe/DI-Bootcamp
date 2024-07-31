// app.js
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(bodyParser.json());

// Define a root route
app.get('/', (req, res) => {
  res.send('Welcome to the User Management API!');
});

// Mount user routes
app.use('/', userRoutes);

// Start the server
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
