// --- server.js ---
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const app = express();
app.use(express.json());


// 🏠 Default Route
app.get("/", (req, res) => {
  res.send("✅ BloodBank Backend is Running on Vercel!");
});

// app.listen(3000,()=>{
//     console.log("listen at 3000");
// })
module.exports = app;
