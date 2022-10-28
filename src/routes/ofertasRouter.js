const express = require('express');
const router = express.Router();

const ofertasController = require('../controllers/ofertasController');

router.get('/', ofertasController.ofertas);

module.exports = router;