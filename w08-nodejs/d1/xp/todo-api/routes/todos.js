const express = require('express');
const router = express.Router();


const todos = [
  { id: '1', task: 'Learn express.js', completed: false },
  { id: '2', task: 'Build a To-Do List app', completed: true },
  { id: '3', task: 'Deploy application', completed: false }
];

// Get all to-do items
router.get('/', (req, res) => {
  res.json(todos);
});

// Add a new to-do item
router.post('/', (req, res) => {
  const { id, task } = req.body;
  if (id && task) {
    todos.push({ id, task });
    res.status(201).json({ id, task });
  } else {
    res.status(400).json({ error: 'Invalid input' });
  }
});

// Update a to-do item by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { task } = req.body;
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.task = task;
    res.json(todo);
  } else {
    res.status(404).json({ error: 'To-do not found' });
  }
});

// Delete a to-do item by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === id);
  if (index !== -1) {
    todos.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ error: 'To-do not found' });
  }
});

module.exports = router;
