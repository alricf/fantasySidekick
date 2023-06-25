// Imports
const express = require('express');
const cors = require('cors');

// Configuration
const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/home-data', (req, res) => {
  fetch("https://fantasy.premierleague.com/api/entry/956735/history/")
    .then((res) => res.json())
    .then((data) => {
      res.json(data.past);
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});