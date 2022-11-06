const fs = require('fs');
const path = require('path');
const {Op} = require('sequelize');
const db = require('../database/models');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productsCategoryFilePath = path.join(__dirname, '../data/productsDataBaseCategory.json');


const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsCategory = JSON.parse(fs.readFileSync(productsCategoryFilePath, 'utf-8'));

const controller = {
    // index: (req, res) => {

    //     const instrumentos = productsCategory
    //     res.render('index', { instrumentos });
    // },
    // metodo viejo del index que funciona con el json -- metodo nuevo con db
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
    // aca hay un ejemplo para traer desde la db
    // instrumentos: async (req, res) => {
    //     res.render('instrumentos', { 
    //         instrumentos: await  db.Product.findAll()
    //         .then(instrumento => {
    //             return instrumento;
    //         })
    //      });
    // }

    // aca hay un ejemplo para traer desde la db
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