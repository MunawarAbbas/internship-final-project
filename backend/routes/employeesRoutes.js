const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController');

const { verifyToken } = require('../middleware/auth');
const adminOnly = require('../middleware/admin');

// Public (view employees)
router.get('/', employeesController.getAllEmployees);
router.get('/:id', employeesController.getEmployeeById);

// Admin-only (manage employees)
router.post('/', verifyToken, adminOnly, employeesController.createEmployee);
router.put('/:id', verifyToken, adminOnly, employeesController.updateEmployee);
router.delete('/:id', verifyToken, adminOnly, employeesController.deleteEmployee);

module.exports = router;
