const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models/');

const controller = {
    login: (req, res) => {
        res.render('login');
    },
    processLogin: async (req, res) => {
        let errors = validationResult(req);
        let usuarioALoguearse;

        if (errors.isEmpty()) {
            let user = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (user.email == req.body.email) {
                if (req.body.password == user.password) {
                    usuarioALoguearse = user;
                }
            }

            if (usuarioALoguearse == undefined) {
                return res.render('login', {
                    errors: [
                        { msg: 'Usuario y/o contraseña inválidos' }
                    ]
                });
            }

            req.session.usuarioLogueado = usuarioALoguearse;
            if (req.body.remember != undefined) {
                res.cookie('recordame', usuarioALoguearse.email, { maxAge: 6000000 })
            }
            return res.redirect('/')
        } else {
            return res.render('login', { errors: errors.errors })
        }

    }
};

module.exports = controller;
        // lo que hicimos con Andrey de process login usando un findOne
        // const user = await db.User.findOne({
        //     where: {
        //         email: req.body.email
        //     }
        // })
        // if (!user || req.body.password != user.password) {
        //     return res.render('login', {
        //         errors: [
        //             {msg: 'Usuario y/o contraseña inválidos'}
        //         ]

        //     })

        // }

        // req.session.usuarioLogueado = user;