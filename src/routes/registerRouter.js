const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { body } = require('express-validator');
const guestMiddleware = require('../middlewares/guestMiddleware');
const validaciones = [
    body('first_name').notEmpty().withMessage('Este campo es obligatorio'),
    body('last_name').notEmpty().withMessage('Este campo es obligatorio'),
    body('email').isEmail().withMessage('Este campo es obligatorio'),
    body('password').notEmpty().withMessage('Este campo es obligatorio')
];  

router.get('/', guestMiddleware, userController.register)
router.post('/', validaciones, userController.processRegister);

module.exports = router;