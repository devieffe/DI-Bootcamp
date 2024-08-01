const express = require('express');
const router = express.Router();

// Sample
let todos = [];
let nextId = 1;

// Get all
router.get('/', (req, res) => {
  res.json(todos);
});

// Add 
router.post('/', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }
  const newTodo = { id: nextId++, title, description, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const todo = todos.find(todo => todo.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ error: 'To-do item not found' });
  }
  if (title) todo.title = title;
  if (description) todo.description = description;
  if (completed !== undefined) todo.completed = completed;
  res.json(todo);
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(todo => todo.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ error: 'To-do item not found' });
  }
  todos.splice(index, 1);
  res.status(204).send();
});


module.exports = router;
