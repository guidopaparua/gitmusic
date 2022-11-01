const express = require('express');
const router = express.Router();
const path = require('path')


const productsController = require('../controllers/instrumentosController');

router.get('/', productsController.categoria);

module.exports = router;

/*

const ofertasController = require('../controllers/ofertasController');

router.get('/', ofertasController.ofertas);

module.exports = router;

*/


