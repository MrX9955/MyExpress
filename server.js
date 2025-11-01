const express = require("express");
const app = express();

const BookStore = [
  { id: 1, name: "The White Tiger", author: "Aravind Adiga" },
  { id: 2, name: "The God of Small Things", author: "Arundhati Roy" },
  { id: 3, name: "Train to Pakistan", author: "Khushwant Singh" },
  { id: 4, name: "The Palace of Illusions", author: "Chitra Banerjee Divakaruni" },
  { id: 5, name: "The Immortals of Meluha", author: "Amish Tripathi" },
];

app.use(express.json());

app.get("/book", (req, res) => {
  const { author } = req.query;
  if (author) {
    const books = BookStore.filter((b) => b.author === author);
    res.send(books);
  } else {
    res.send(BookStore);
  }
});

app.get("/book/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = BookStore.find((b) => b.id === id);
  res.send(book);
});

app.post("/book", (req, res) => {
  const exists = BookStore.find((b) => b.id === req.body.id);
  if (exists) {
    res.send("Already Available");
  } else {
    BookStore.push(req.body);
    res.send("Data saved Successfully");
  }
});

app.use("/",(req,res)=>{
    res.send("Welcome to Book Store");
})

module.exports = app;
