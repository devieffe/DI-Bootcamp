const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

let books = [
  { id: 1, title: 'Designing Web Usability', author: 'Jackb Nielsen', publishedYear: 1999 },
  { id: 2, title: 'Design', author: 'Tom Pieters', publishedYear: 2005 },
  { id: 3, title: 'Web Redesign', author: 'Kelly Goto', publishedYear: 2002 }
];

app.get('/api/books', (req, res) => {
  res.status(200).json(books);
});

app.get('/api/books/:bookId', (req, res) => {
  const bookId = parseInt(req.params.bookId, 10);
  const book = books.find(b => b.id === bookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.post('/api/books', (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({ message: 'Title, author, and publishedYear are required' });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear
  };

  books.push(newBook);
  res.status(201).json(newBook);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});