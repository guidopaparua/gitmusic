const express = require('express');

const ProductsDbController = require('../controllers/ProductsDbController')

const router = express.Router();

router.get('/crear', ProductsDbController.create)

module.exports = router;