const db = require('../database/models')

const DbOrdersController = {
    list: function (req, res) {
        db.Order.findAll()
            .then(function (users) {
                res.render('listadoDeOrdenes', { orders: orders })
            })
    },
    create: function (req, res) {
        db.Order.create({
            state: req.body.state,
            coments: req.body.coments,
            user_id: req.body.user_id,
        });
        //?
        res.redirect('/orders')
    },
    edit: function (req, res) {
        db.Order.findByPk(req.params.id)
            .then(function (users) {
                res.render('editarOrden', { orders: orders })
            })
    },
    delete: function (req, res) {
        db.Order.destroy({
            where: {
                id: req.params.id
            }
        })
        //?
        res.redirect('/orders')
    }
}
module.exports = DbOrdersController;