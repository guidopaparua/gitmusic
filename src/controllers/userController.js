const User = require('../database/models/Users');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models/');

const controller = {
    processRegister: async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('register', { errors: errors.array()})
        }

        let userInDb = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })

        if (userInDb) {
            return res.render('register', {
                errors: [
                    {msg: 'Este email ya está registrado'}   
                ]
                
            })
        }

        let userToCreate = {
            ...req.body,
            imagen: req.file ? req.file.filename : 'default.png',
            admin: false
        }
        try {
            await db.User.create(userToCreate)
            return res.redirect('/login')
        } catch (error) {
            return res.send(error)
        }
    },
    register: (req, res) => {
        res.render('register');
    }

}
module.exports = controller;