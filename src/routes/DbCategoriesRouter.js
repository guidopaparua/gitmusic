const express = require('express');

const DbCategoriesController = require('../controllers/DbCategoriesController')

const router = express.Router();

router.get('/', DbCategoriesController.list)
router.post('/', DbCategoriesController.create)
router.post('/', DbCategoriesController.edit)
router.post('/', DbCategoriesController.delete)

module.exports = router;