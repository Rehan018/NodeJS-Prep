const express = require('express');
const router = express.Router();
const AdminController = require('../controller/admin');
const BookingController = require('../controller/booking');

// Define admin-related routes
router.get('/dashboard', AdminController.getDashboard);
router.get('/manage-users', AdminController.manageUsers);

module.exports = router;
