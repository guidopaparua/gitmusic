const fs = require('fs');
const path = require('path');
const {Op} = require('sequelize');
const db = require('../database/models');

const controller = {
    index: (req, res) =>{
        db.Product.findAll()
        .then( (products) =>{
            return res.render('index', {products})
        })
        .catch(error =>{
            console.log(error)
            res.send(500);
        })
    },   

    search: (req, res) => {
        db.Products.findAll({
            where: {
                name: { [Op.like]: `%${req.query.search}%` }
            }
        })
            .then(function (instrumentos) {
                res.render('instrumentos', { instrumentos })
            })
            .catch(error => {
                console.log(error)
                res.send(500);
            })
    },
    
    instrumentos: (req, res) =>{
        db.Product.findAll()
        .then( (products) =>{
            return res.render('instrumentos', {products})
        })
        .catch(error =>{
            console.log(error)
            res.send(500);
        })
    }
};

module.exports = controller;