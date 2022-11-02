const db = require('../database/models')

const ProductsDbController = {
    index: function(req, res){
        db.Product.findAll({include: ['orders']})
        .then(products =>{
            res.send(products)
        })
    },
    
}

module.exports = ProductsDbController;