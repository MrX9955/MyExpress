// server.js

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [];

app.get('/', (req, res) => {
  res.send('Welcome to the Book Library.');
});

app.get('/books', (req, res) => {
  res.json(books);
});

app.post('/books', (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ message: 'Title and author are required.' });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
