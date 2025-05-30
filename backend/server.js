require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();


app.use(express.json());
app.use(cors());


const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);

  });


const Game = require('./models/Game.js');


const gamesRoutes = require('./routes/games');


app.use('/api', gamesRoutes);
app.use('/api', userRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});