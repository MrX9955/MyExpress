const express = require("express");
const app = express();

const BookStore = [
  { id: 1, name: "Main Jise Sochta Hun", author: "Dilbagh" },
  { id: 2, name: "Wo Jo Khawab The", author: "Dilbagh Usafir" },
  { id: 3, name: "Gaun Chhuta", author: "Vikash Sah" },
  { id: 4, name: "How Do I Explain Her", author: "Mr X" },
  { id: 5, name: "How Lonely I Am", author: "Dilbagh Musafir" },
];

app.use(express.json());

app.get("/books", (req, res) => {
  const { author } = req.query;
  if (author) {
    const books = BookStore.filter((b) => b.author === author);
    res.send(books);
  } else {
    res.send(BookStore);
  }
});

app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = BookStore.find((b) => b.id === id);
  res.send(book);
});

app.post("/books", (req, res) => {
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
