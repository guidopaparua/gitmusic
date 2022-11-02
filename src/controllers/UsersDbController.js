const Products = require('../database/models/Products');
const db = require('../database/models')
const User = require('../database/models/Users')

const UsersDbController = {
    create: function(req, res){
        db.Products.findAll()
        .then((Products) => {
            return res.render('ListProducts', {Products:Products})
        })
    }
}

module.exports = UsersDbController;