// server.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// Simulate a database with an array
let posts = [
  { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
  { id: 2, title: 'Second Post', content: 'This is the content of the second post.' }
];

// GET /posts - List all blog posts
app.get('/posts', (req, res) => {
  res.status(200).json(posts);
});

// GET /posts/:id - Get a specific blog post by id
app.get('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const post = posts.find(p => p.id === postId);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// POST /posts - Create a new blog post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required' });
  }

  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id - Update an existing blog post
app.put('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const { title, content } = req.body;
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    if (title) posts[postIndex].title = title;
    if (content) posts[postIndex].content = content;
    res.status(200).json(posts[postIndex]);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// DELETE /posts/:id - Delete a blog post
app.delete('/posts/:id', (req, res) => {
  const postId = parseInt(req.params.id, 10);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex !== -1) {
    posts.splice(postIndex, 1);
    res.status(204).end(); // No content
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Handle invalid routes
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
