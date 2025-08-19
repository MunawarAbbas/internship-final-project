const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');
const { verifyToken } = require('../middleware/auth');  // ✅ get function
const adminOnly = require('../middleware/admin');       // ✅ already a function

// Public routes
router.get('/', roomController.getAllRooms);
router.get('/:id', roomController.getRoomById);

// Admin-only routes
router.post('/', verifyToken, adminOnly, roomController.createRoom);
router.put('/:id', verifyToken, adminOnly, roomController.updateRoom);
router.delete('/:id', verifyToken, adminOnly, roomController.deleteRoom);

module.exports = router;
