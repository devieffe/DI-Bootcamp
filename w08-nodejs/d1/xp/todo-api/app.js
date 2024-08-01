const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Import and use the todos router
const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('To-Do List API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`OK: http://localhost:${PORT}`);
});
