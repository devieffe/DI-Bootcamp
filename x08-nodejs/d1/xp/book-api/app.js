const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Define a route for the root path
app.get('/', (req, res) => {
  res.send('Books API');
});

const booksRouter = require('./routes/books');

app.use('/books', booksRouter);

app.listen(port, () => {
  console.log(`OK at http://localhost:${port}/`);
});
