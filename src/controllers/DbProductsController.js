const db = require('../database/models')

const DbProductsController = {
    index: function(req, res){
        db.Product.findAll({include: ['orders']})
        .then(products =>{
            res.send(products)
        })
    },
    list: function (req, res) {
        db.Product.findAll()
            .then(function (products) {
                res.render('listadoDeProductos', { products: products })
            })
    },
    create: function (req, res) {
        db.Product.create({
            name: req.body.name,
            description: req.body.description,
            discount: req.body.discount,
            price: req.body.price,
            category: req.body.category,
            imagen: req.body.imagen
        });
        //?
        res.redirect('/products')
    },
    edit: function (req, res) {
        db.Product.findByPk(req.params.id)
            .then(function (products) {
                res.render('editarProducto', { products: products })
            })
    },
    delete: function (req, res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        //?
        res.redirect('/products')
    }
}
module.exports = DbProductsController;