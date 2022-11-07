const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path')
const authMiddleware = require('../middlewares/authMiddleware')

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// ************ Configuración de multer ************
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        
        cb(null, 'public/images/products')
    },
    filename:(req, file, cb)=>{
        let imageName = Date.now() + path.extname(file.originalname);
        cb(null, imageName)
    }
})

const upload = multer({ storage });

/*** Devolver todos los productos ***/
router.get('/', productsController.index);

/*** Crear un producto ***/ 
router.get('/create', authMiddleware, productsController.create);
router.post('/create',authMiddleware, upload.single('image'), productsController.store);
router.get('/cart', productsController.cart);

/*** Devolver un producto ***/ 
router.get('/:id', productsController.detail);

/*** Editar un producto ***/
router.get('/:id/edit', authMiddleware, productsController.edit);
router.put('/edit', authMiddleware, upload.single('image'), productsController.update);

/*** Eliminar un producto***/ 
router.delete('/:id', authMiddleware, productsController.destroy);



module.exports = router;