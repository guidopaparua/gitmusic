const express = require('express');
const router = express.Router();

const logoutController = require('../controllers/logoutController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, logoutController.logout);

module.exports = router;