const express = require('express');
const app = express();

app.use(express.json());

mongoose
  .connect("mongodb+srv://mrx9955:Bihar9955@vikashdb.3e0vafd.mongodb.net/BloodDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error: " + err));


app.get('/', (req, res) => {
res.send('Welcome to the Book Library.');
});

module.exports = app;
