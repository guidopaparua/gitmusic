// const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models/');

const controller = {
    login: (req, res) => {
        res.render('login');
    },
    processLogin: async (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            let user = await db.User.findOne({
                where: {
                    email: req.body.email
                }
            })
            if (!user) {
                return res.render('login', {
                    errors: [
                        { msg: 'Usuario y/o contraseña inválidos' }
                    ]
                });
            }
            // const verifyPassword = bcryptjs.compareSync(req.body.password, user.password)
            // if (!verifyPassword) {
            //     return res.render('login', {
            //         errors: [
            //             { msg: 'Contraseña incorrecta' }
            //         ]
            //     });
            // }

            const userAuthTrue = user.first_name;
            if (req.body.remember) {
                res.cookie('userCookie', userAuthTrue, { maxAge: 6000000 })
            }
            req.session.usuarioLogueado = userAuthTrue;
            return res.redirect('/')
        } else {
            return res.render('login', { errors: errors.errors })
        }

    }
};

module.exports = controller;