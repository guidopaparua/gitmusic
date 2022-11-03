const express = require('express');

const DbOrders_has_productsController = require('../controllers/DbOrders_has_productsController')

const router = express.Router();c

// router.get('/', DbOrders_has_productsController.list)
router.post('/', DbOrders_has_productsController.create)
// router.post('/', DbOrders_has_productsController.edit)
router.post('/', DbOrders_has_productsController.delete)

module.exports = router;