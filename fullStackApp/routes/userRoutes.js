const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');

// Define user-related routes
router.get('/profile/:userId', UserController.getUserProfile);
router.post('/profile/:userId/update', UserController.updateUserProfile);

module.exports = router;
