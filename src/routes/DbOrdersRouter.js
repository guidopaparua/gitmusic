const express = require('express');

const DbOrdersController = require('../controllers/DbOrdersController')

const router = express.Router();

router.get('/', DbOrdersController.list)
router.post('/', DbOrdersController.create)
router.post('/', DbOrdersController.edit)
router.post('/', DbOrdersController.delete)

module.exports = router;