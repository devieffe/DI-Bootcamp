const express = require('express');
const app = express();
const port = 5005;
const { fetchPosts } = require('./data/dataService');

app.use(express.json());

app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
    console.log('Data retrieved and sent as response.');
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch posts.' });
  }
});

app.get('/', (req, res) => {
  res.send('CRUD API is running!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});