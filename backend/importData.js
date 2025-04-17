require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const Game = require('./models/Game');

// Read the JSON data from file
const data = JSON.parse(fs.readFileSync('./game.json', 'utf-8'));

// Fix bad release dates (like "2014-03-00") by replacing day "00" with "01"
const fixedData = data.map(game => {
  if (game.release_date && /-00$/.test(game.release_date)) {
    game.release_date = game.release_date.replace(/-00$/, '-01');
  }
  return game;
});

// Connect to MongoDB and insert data
mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('✅ Connected to MongoDB');

    // Optional: clear existing data
    await Game.deleteMany();

    // Insert new game data
    await Game.insertMany(fixedData);
    console.log('🎉 Data imported successfully!');

    process.exit();
  })
  .catch(error => {
    console.error('❌ Error importing data:', error);
    process.exit(1);
  });
