const express = require('express');
const router = express.Router();
const Post = require('../models/postModel');

// GET /posts - List all blog posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// GET /posts/:id - Get a specific blog post
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (post) {
      res.json(post);
    } else {
      res.status(404).send('Post not found');
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// POST /posts - Create a new blog post
router.post('/', async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// PUT /posts/:id - Update a blog post
router.put('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (post) {
      await post.update(req.body);
      res.json(post);
    } else {
      res.status(404).send('Post not found');
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// DELETE /posts/:id - Delete a blog post
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);
    if (post) {
      await post.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('Post not found');
    }
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
