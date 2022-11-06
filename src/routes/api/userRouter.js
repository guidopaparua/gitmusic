const express = require('express');
const router = express.Router();

const userApiController = require('../../controllers/api/userController');

router.get('/', userApiController.getAll);
router.get('/:id', userApiController.getById);



module.exports = router;