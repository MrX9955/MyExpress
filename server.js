// server.js

const express = require('express');
const app = express();

app.use(express.json());

const BookStore = [
  { id: 1, name: "The White Tiger", author: "Aravind Adiga" },
  { id: 2, name: "The God of Small Things", author: "Arundhati Roy" },
  { id: 3, name: "Train to Pakistan", author: "Khushwant Singh" },
  { id: 4, name: "The Palace of Illusions", author: "Chitra Banerjee Divakaruni" },
  { id: 5, name: "The Immortals of Meluha", author: "Amish Tripathi" },
];

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

module.exports = app;
