const db = require('../database/models')

const DbUsersController = {
    list: function (req, res) {
        db.User.findAll()
            .then(function (users) {
                res.render('listadoDeUsuarios', { users: users })
            })
    },
    create: function (req, res) {
        db.User.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            imagen: req.file ? req.file.filename : 'default.png',
            password: req.body.password,
            admin: req.body.admin
        });
        //?
        res.redirect('/users')
    },
    edit: function (req, res) {
        db.User.findByPk(req.params.id)
            .then(function (users) {
                res.render('editarUsuario', { users: users })
            })
    },
    delete: function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        })
        //?
        res.redirect('/users')
    }
}
module.exports = DbUsersController;