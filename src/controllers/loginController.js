const bcryptjs = require('bcryptjs');
const db = require('../database/models/');

const controller = {
    login: (req, res) => {
        res.render('login');
    },
    processLogin: async (req, res) => {
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
        } //meter cookies aca
        // session
        return res.redirect('/')
    }
};

module.exports = controller;