const router = require('express').Router();
const authCtrl = require('../controllers/authController');
const { verifyToken } = require('../middleware/auth');

// POST register (new user)
router.post('/register', authCtrl.register);

// POST login
router.post('/login', authCtrl.login);

// GET profile (protected)
router.get('/profile', verifyToken, authCtrl.profile);

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Auth routes are working. Use POST /login or POST /register.' });
});

module.exports = router;
