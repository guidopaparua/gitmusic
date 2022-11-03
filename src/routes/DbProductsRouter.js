const express = require('express');

const DbProductsController = require('../controllers/DbProductsController')

const router = express.Router();

router.get('/', DbProductsController.index)
router.get('/', DbProductsController.list)
router.post('/', DbProductsController.create)
router.post('/', DbProductsController.edit)
router.post('/', DbProductsController.delete)


module.exports = router;