// --- server.js ---
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const app = express();
app.use(express.json());


const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema); // ✅ Avoid model overwrite on Vercel

// 🏠 Default Route
app.get("/", (req, res) => {
  res.send("✅ BloodBank Backend is Running on Vercel!");
});

// app.listen(3000,()=>{
//     console.log("listen at 3000");
// })
module.exports = app;
