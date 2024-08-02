const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const DATA_FILE = 'tasks.json';

app.use(bodyParser.json());

// Helper function to read the tasks from the JSON file
const readTasks = () => {
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
};

// Helper function to write tasks to the JSON file
const writeTasks = (tasks) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(tasks, null, 2));
};

// GET /tasks: Retrieve a list of all tasks
app.get('/tasks', (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// GET /tasks/:id: Retrieve a specific task by ID
app.get('/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).send('Task not found');
  }
});

// POST /tasks: Create a new task
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).send('Title and description are required');
  }

  const tasks = readTasks();
  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    description,
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

// PUT /tasks/:id: Update a task by ID
app.put('/tasks/:id', (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(400).send('Title and description are required');
  }

  const tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) {
    return res.status(404).send('Task not found');
  }

  tasks[taskIndex] = { id: tasks[taskIndex].id, title, description };
  writeTasks(tasks);
  res.json(tasks[taskIndex]);
});

// DELETE /tasks/:id: Delete a task by ID
app.delete('/tasks/:id', (req, res) => {
  const tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (taskIndex === -1) {
    return res.status(404).send('Task not found');
  }

  tasks.splice(taskIndex, 1);
  writeTasks(tasks);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`OK http://localhost:${PORT}`);
});
