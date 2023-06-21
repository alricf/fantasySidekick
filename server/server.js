// Imports
const express = require('express');
const cors = require('cors');

// Configuration
const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})