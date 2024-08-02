const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const postRoutes = require('./routes/posts');

const app = express();
app.use(bodyParser.json());

// PostgreSQL connection
const sequelize = new Sequelize('blog_db', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres'
});

// Test PostgreSQL connection
sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

// routes
app.use('/posts', postRoutes);

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`OK http://localhost:${PORT}`);
});