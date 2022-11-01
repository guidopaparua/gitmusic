const express = require('express');
const router = express.Router();
const path = require('path')


const productsController = require('../controllers/instrumentosController');


router.get('/guitarras', productsController.guitarras);
router.get('/bajos', productsController.bajos);
router.get('/vientos', productsController.vientos);
router.get('/teclados', productsController.teclados);
router.get('/percusion', productsController.percusion);
router.get('/amplificadores', productsController.amplificadores);

module.exports = router;




