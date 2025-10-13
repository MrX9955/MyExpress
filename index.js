// index.js
const express = require("express");

const app = express();
 
app.use("/about", (req, res) => {
  res.send("Hello, This is backend");
});

app.use("/contact", (req, res) => {
  res.send("This is Contact page");
});

app.use("/details", (req, res) => {
  res.send("This is details page");
});

app.use("/", (req, res) => {
  res.send("This is HOME page");
});

// ❌ Don't use app.listen() — Vercel handles that automatically
module.exports = app;
