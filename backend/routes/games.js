const express = require('express');
const Game = require('../models/Game'); // Import the Game model
const router = express.Router();

// GET route to fetch all games
router.get('/games', async (req, res) => {
  try {
    const games = await Game.find();  // Fetch all games from MongoDB
    res.json(games);  // Return the games data as JSON response
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ error: 'Failed to fetch games' });
  }
});

// GET route to fetch a specific game by ID
router.get('/games/:id', async (req, res) => {
  try {
    const gameId = req.params.id;
    const game = await Game.findById(gameId);  // Fetch game by ID from MongoDB

    if (game) {
      res.json(game);  // Return the game details as JSON response
    } else {
      res.status(404).json({ error: 'Game not found' });  // Return 404 if game not found
    }
  } catch (error) {
    console.error('Error fetching game details:', error);
    res.status(500).json({ error: 'Failed to fetch game details' });
  }
});

module.exports = router;
