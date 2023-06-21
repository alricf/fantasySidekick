// Imports
const express = require('express');
const cors = require('cors');

// Global variables
const app = express();

// Middleware
app.use(cors())
app.use(express.json());