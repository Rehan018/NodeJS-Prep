const Booking = require('../models/booking');

exports.getEditBooking = async (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/admin/bookings');
    }

    const bookingId = req.params.bookingId;
    try {
        const booking = await Booking.findByPk(bookingId);

        if (!booking) {
            return res.redirect('/admin/bookings');
        }

        res.render('booking/edit-booking', {
            pageTitle: 'Edit Booking',
            path: '/booking/edit-booking',
            editing: editMode,
            booking: booking,
        });
    } catch (error) {
        console.error('Error fetching booking for edit:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.postEditBooking = async (req, res, next) => {
    const bookingId = req.body.bookingId;
    const updatedName = req.body.name;
    const updatedMobile = req.body.mobile;
    const updatedEmail = req.body.email;

    try {
        const booking = await Booking.findByPk(bookingId);

        if (!booking) {
            return res.redirect('/admin/bookings');
        }

        booking.name = updatedName;
        booking.mobile = updatedMobile;
        booking.email = updatedEmail;

        await booking.save();
        console.log('UPDATED BOOKING!');
        res.redirect('/admin/bookings');
    } catch (error) {
        console.error('Error updating booking:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.getBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.findAll();

        res.render('booking/bookings', {
            bookings: bookings,
            pageTitle: 'Admin Bookings',
            path: '/admin/bookings',
        });
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.postDeleteBooking = async (req, res, next) => {
    const bookingId = req.body.bookingId;

    try {
        const booking = await Booking.findByPk(bookingId);

        if (!booking) {
            return res.redirect('/admin/bookings');
        }

        await booking.destroy();
        console.log('DESTROYED BOOKING');
        res.redirect('/admin/bookings');
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).send('Internal Server Error');
    }
};
