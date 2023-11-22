const express = require('express');
const router = express.Router();
const BookingController = require('../controllers/booking');
const AdminController = require('../controller/admin');

router.get('/dashboard',AdminController.getDashboard);

// Define booking-related routes
router.get('/add-booking', BookingController.getAddBooking);
router.post('/add-booking', BookingController.postAddBooking);
router.get('/edit-booking/:bookingId', BookingController.getEditBooking);
router.post('/edit-booking/:bookingId', BookingController.postEditBooking);
router.get('/bookings', BookingController.getBookings);
router.post('/delete-booking', BookingController.postDeleteBooking);

module.exports = router;
