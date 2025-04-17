require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
 // Load environment variables from the .env file

const app = express();

// Use middleware to parse JSON
app.use(express.json());
app.use(cors());

// Connect to MongoDB using the connection string from the .env file
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Import the Game model
const Game = require('./models/Game.js');

// Import the routes
const gamesRoutes = require('./routes/games');

// Use the routes in the app
app.use('/api', gamesRoutes);

// Start the server using the port from the .env file (default to 3000 if not specified)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
