const express = require('express');

const UsersDbController = require('../controllers/UsersDbController')

const router = express.Router();

router.get('/crear', UsersDbController.create)

module.exports = router;