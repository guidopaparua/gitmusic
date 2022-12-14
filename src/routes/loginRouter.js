const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
const guestMiddleware = require('../middlewares/guestMiddleware');

router.get('/', guestMiddleware, loginController.login);
router.post('/', loginController.processLogin);

module.exports = router;