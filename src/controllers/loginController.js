const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const db = require('../database/models/');

const controller = {
    login: (req, res) => {
        res.render('login');
    },
    processLogin: async (req, res) => {
        // let errors = await validationResult(req);

        // if (errors.isEmpty()) {
        //     let user = db.User.findOne({
        //             where: {
        //                 email: req.body.email
        //             }
        //         })
            
        //     for (let i = 0; i < user.length; i++) {
        //         if (user[i].email == req.body.email) {
        //             if (req.body.password == user.password) {
        //                 let usuarioALoguearse = user[i];
        //                 break
        //             }
        //         }
        //     }
        //     if (usuarioALoguearse == undefined) {
        //         return res.render('login', {errors: [
        //             {msg: 'Usuario y/o contraseña inválidos'}
        //         ]});
        //     }
        //     req.session.usuarioLogueado = usuarioALoguearse;
        // } 
        const user = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })
        if (!user || req.body.password != user.password) {
            return res.render('login', {
                errors: [
                    {msg: 'Usuario y/o contraseña inválidos'}
                ]
                
            })
        if (req.body.remember != undefined) {
            res.cookie('recordame', usuarioALoguearse.email, { maxAge: 6000000 })
        }
        }
        //meter cookies aca
        // session
        return res.redirect('/')
    }
};

module.exports = controller;