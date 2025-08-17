const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;




// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/userController');

// router.get('/users', userController.getAllUsers);

// module.exports = router;
