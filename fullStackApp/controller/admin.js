const Booking = require('../models/booking');

const BookingController = {
    getAddBooking(req, res, next) {
        res.render('admin/edit-booking', {
            pageTitle: 'Add Booking',
            path: '/admin/add-booking',
            editing: false
        });
    },

    postAddBooking(req, res, next) {
        const { name, mobile, email } = req.body;

        Booking.create({
            name: name,
            mobile: mobile,
            email: email,
            // Add any additional fields you may have in your Booking model
        })
            .then(result => {
                console.log('Created Booking');
                res.redirect('/admin/bookings');
            })
            .catch(err => {
                console.log(err);
            });
    },

    getEditBooking(req, res, next) {
        const editMode = req.query.edit;
        if (!editMode) {
            return res.redirect('/');
        }
        const bookingId = req.params.bookingId;
        Booking.findByPk(bookingId)
            .then(booking => {
                if (!booking) {
                    return res.redirect('/');
                }
                res.render('admin/edit-booking', {
                    pageTitle: 'Edit Booking',
                    path: '/admin/edit-booking',
                    editing: editMode,
                    booking: booking
                });
            })
            .catch(err => console.log(err));
    },

    postEditBooking(req, res, next) {
        const bookingId = req.body.bookingId;
        const updatedName = req.body.name;
        const updatedMobile = req.body.mobile;
        const updatedEmail = req.body.email;
        // Update any additional fields you may have in your Booking model

        Booking.findByPk(bookingId)
            .then(booking => {
                booking.name = updatedName;
                booking.mobile = updatedMobile;
                booking.email = updatedEmail;
                // Update any additional fields you may have in your Booking model
                return booking.save();
            })
            .then(result => {
                console.log('UPDATED BOOKING!');
                res.redirect('/admin/bookings');
            })
            .catch(err => console.log(err));
    },

    getBookings(req, res, next) {
        Booking.findAll()
            .then(bookings => {
                res.render('admin/bookings', {
                    bookings: bookings,
                    pageTitle: 'Admin Bookings',
                    path: '/admin/bookings'
                });
            })
            .catch(err => console.log(err));
    },

    postDeleteBooking(req, res, next) {
        const bookingId = req.body.bookingId;
        Booking.findByPk(bookingId)
            .then(booking => {
                return booking.destroy();
            })
            .then(result => {
                console.log('DESTROYED BOOKING');
                res.redirect('/admin/bookings');
            })
            .catch(err => console.log(err));
    },

    getDashboard(req, res) {
        res.render('admin/dashboard', {
            pageTitle: 'Admin Dashboard',
            path: '/admin/dashboard',
        });
    },
};

module.exports = BookingController;
