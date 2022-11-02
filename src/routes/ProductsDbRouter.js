const express = require('express');

const ProductsDbController = require('../controllers/ProductsDbController')

const router = express.Router();

router.get('/', ProductsDbController.index)

module.exports = router;