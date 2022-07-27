const express = require('express');
const router = express.Router();

const productDetailsController = require('../controllers/productDetailsController');

router.get('/:id', productDetailsController.productDetails);

module.exports = router;