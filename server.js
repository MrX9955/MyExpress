// --- server.js ---
const express = require("express");
const mongoose = require("mongoose");



// 🧩 MongoDB Connection
let isConnected = false;
async function ConnectedToDB() {
      mongoose.connect("mongodb+srv://mrx9955:Bihar9955@vikashdb.3e0vafd.mongodb.net/BloodDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      isConnected = true
      console.log("MongoDB Connected")
    })
    .catch(err => console.error("MongoDB Connection Error:", err));
}

// middleware 
app.use((req,res,next)=>{
  if(!isConnected){
    ConnectedToDB();
  }
  next();
})

// 🏠 Default Route
app.get("/", (req, res) => {
  res.send("✅ BloodBank Backend is Running on Vercel!");
});

// app.listen(3000,()=>{
//     console.log("listen at 3000");
// })
module.exports = app;
