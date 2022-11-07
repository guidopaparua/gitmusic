const fs = require('fs');
const path = require('path');
const db = require('../database/models/');
const sequelize = require('sequelize');
const Op = sequelize.Op;


const controller = {
    ofertas: (req, res) => {
        db.Product.findAll({
            where: {
                discount: {
                    [Op.ne]: null
                  }
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