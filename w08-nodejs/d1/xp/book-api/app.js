const express = require('express');
const app = express();
const port = 3010;

app.use(express.json());

const booksRouter = require('./routes/books');

app.use('/books', booksRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
