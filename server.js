const express = require('express');
const app = express();

app.use(express.json());

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


app.get('/', (req, res) => {
res.send('Welcome to the Book Library.');
});

module.exports = app;
