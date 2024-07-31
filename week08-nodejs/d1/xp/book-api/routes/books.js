const express = require('express');
const router = express.Router();

let books = [];
let nextId = 1;

// Get all 
router.get('/', (req, res) => {
  res.json(books);
});

// Add 
router.post('/', (req, res) => {
  const { title, author, publishedYear } = req.body;
  if (!title || !author || !publishedYear) {
    return res.status(400).json({ error: 'Title, author, and published year are required' });
  }
  const newBook = { id: nextId++, title, author, publishedYear };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update 
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, author, publishedYear } = req.body;
  const book = books.find(book => book.id === parseInt(id));
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  if (title) book.title = title;
  if (author) book.author = author;
  if (publishedYear) book.publishedYear = publishedYear;
  res.json(book);
});

// Delete a book by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(book => book.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'Not found' });
  }
  books.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
