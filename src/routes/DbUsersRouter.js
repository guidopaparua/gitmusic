const express = require('express');

const DbUsersController = require('../controllers/DbUsersController')

const router = express.Router();

router.get('/', DbUsersController.list)
router.post('/', DbUsersController.create)
router.post('/', DbUsersController.edit)
router.post('/', DbUsersController.delete)

module.exports = router;