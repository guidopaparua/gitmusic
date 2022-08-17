const express = require('express');
const router = express.Router();
const multer = require('multer');

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Configuración de multer ************
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/products')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage });

/*** Devolver todos los productos ***/
router.get('/', productsController.index);

/*** Crear un producto ***/ 
router.get('/create', productsController.create);
router.post('/create', productsController.store);

/*** Devolver un producto ***/ 
router.get('/:id', productsController.detail);

/*** Editar un producto ***/
router.get('/:id/edit', productsController.edit);
router.put('/:id', productsController.update);

/*** Eliminar un producto***/ 
router.delete('/:id', productsController.destroy);


module.exports = router;