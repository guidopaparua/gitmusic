const fs = require('fs');
const path = require('path');
const db = require('../database/models/');


const controller = {
    ofertas: (req, res) => {
        db.Product.findAll({
            where: {
                discount: 15 //not Null
            }
        })
        .then( (products) =>{
            return res.render('ofertas', {products})
        })
        .catch(error =>{
            console.log(error)
            res.send(500);
        })
    }
};

module.exports = controller;