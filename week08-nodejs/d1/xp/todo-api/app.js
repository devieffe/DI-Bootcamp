const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const todosRouter = require('./routes/todos');

app.use('/todos', todosRouter);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
