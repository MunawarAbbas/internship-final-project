const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');  // ✅ fixed
const { verifyToken, isAdmin } = require('../middleware/auth');  
const adminOnly = require('../middleware/admin');

// Public registration (no auth required)
router.post('/', userController.createUser);

// Protected (admin only)
router.get('/', verifyToken, adminOnly, userController.getAllUsers);
router.get('/:id', verifyToken, userController.getUserById);
router.put('/:id', verifyToken, userController.updateUser);
router.delete('/:id', verifyToken, adminOnly, userController.deleteUser);

module.exports = router;
