const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

router.get('/', guestMiddleware, loginController.login);
router.get('/logout', authMiddleware, loginController.logout);
router.post('/', loginController.processLogin);

module.exports = router;