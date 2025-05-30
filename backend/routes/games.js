const express = require('express');
const Game = require('../models/Game'); 
const router = express.Router();
const fs = require('fs');
const path = require('path');

// GET route to fetch all games 


router.get('/games', (req, res) => {
  try {
    const filePath = path.join(__dirname, '../data/game.json'); 
    const data = fs.readFileSync(filePath, 'utf-8');
    const games = JSON.parse(data);
    res.json(games);
  } catch (error) {
    console.error('Error reading games.json:', error);
    res.status(500).json({ error: 'Failed to read games data' });
  }
});

// GET route to fetch a specific game by ID
router.get('/games/:id', (req, res) => {
  try {
    const filePath = path.join(__dirname, '../data/game.json');
    const data = fs.readFileSync(filePath, 'utf-8');
    const games = JSON.parse(data);

    const game = games.find(g => g.id == req.params.id);

    if (game) {
      res.json(game);
    } else {
      res.status(404).json({ error: 'Game not found' });
    }
  } catch (error) {
    console.error('Error reading game by ID:', error);
    res.status(500).json({ error: 'Failed to fetch game' });
  }
});

module.exports = router;
