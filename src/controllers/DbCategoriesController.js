const db = require('../database/models')

const DbCategoriesController = {
    list: function (req, res) {
        db.Category.findAll()
            .then(function (categories) {
                res.render('listadoDeCategorias', { categories:categories })
            })
    },
    create: function (req, res) {
        db.Category.create({
            name: req.body.name,
            description: req.body.description,
        });
        //?
        res.redirect('/categories')
    },
    edit: function (req, res) {
        db.Category.findByPk(req.params.id)
            .then(function (categories) {
                res.render('editarCategoria', { categories:categories })
            })
    },
    delete: function (req, res) {
        db.Category.destroy({
            where: {
                id: req.params.id
            }
        })
        //?
        res.redirect('/categories')
    }
}
module.exports = DbCategoriesController;