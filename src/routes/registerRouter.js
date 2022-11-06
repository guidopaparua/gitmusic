const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userController');
const { body } = require('express-validator');
const guestMiddleware = require('../middlewares/guestMiddleware');
const validaciones = [
    body('first_name').notEmpty().withMessage('Este campo es obligatorio'),
    body('last_name').notEmpty().withMessage('Este campo es obligatorio'),
    body('email').isEmail().withMessage('Este campo es obligatorio'),
    body('password').notEmpty().withMessage('Este campo es obligatorio')
];  


// ************ Configuración de multer ************
const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        
        cb(null, 'public/images/users')
    },
    filename:(req, file, cb)=>{
        let imageName = Date.now() + path.extname(file.originalname);
        cb(null, imageName)
    }
})

const upload = multer({ storage });


router.get('/', userController.register)
router.post('/', upload.single('imagen'), userController.processRegister);

module.exports = router;