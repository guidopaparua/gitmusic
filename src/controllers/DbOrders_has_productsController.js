const db = require('../database/models')

const DbOrders_has_productsController = {
    // list: function (req, res) {
    //     db.Orders_has_product.findAll()
    //         .then(function (orders_has_products) {
    //             res.render('listadoDeUsuarios', { orders_has_products: orders_has_products })
    //         })
    // },
    create: function (req, res) {
        db.Orders_has_product.create({
            order_id: req.body.order_id,
            cantidad: req.body.last_name,
            product_id: req.body.product_id
        });
        //?
        res.redirect('/orders_has_products')
    },
    // edit: function (req, res) {
    //     db.Orders_has_product.findByPk(req.params.id)
    //         .then(function (orders_has_products) {
    //             res.render('editarUsuario', { orders_has_products: orders_has_products })
    //         })
    // },
    delete: function (req, res) {
        db.Orders_has_product.destroy({
            where: {
                id: req.params.id
            }
        })
        //?
        res.redirect('/orders_has_products')
    }
}
module.exports = DbOrders_has_productsController;