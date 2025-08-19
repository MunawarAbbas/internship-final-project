// backend/routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { verifyToken } = require('../middleware/auth'); // ✅ auth middleware
const adminOnly = require('../middleware/admin');       // ✅ admin middleware

// Public routes
router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);

// Admin-only routes
router.post('/', verifyToken, adminOnly, bookingController.createBooking);
router.put('/:id', verifyToken, adminOnly, bookingController.updateBooking);
router.delete('/:id', verifyToken, adminOnly, bookingController.deleteBooking);

module.exports = router;
