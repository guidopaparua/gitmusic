const Products = require('../database/models/Products');
const db = require('../database/models')

const UsersDbController = {
    create: function(req, res){
        db.Products.findAll()
        .then((Products) => {
            return res.render('ListProducts', {Products:Products})
        })
    }
}

module.exports = UsersDbController;