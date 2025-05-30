const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Renamed to reflect DB operations
router.post('/database/write', userController.signup); 
router.post('/database/read', userController.login);  

module.exports = router;
