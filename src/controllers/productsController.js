const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    index: (req, res) => {
        res.render('products');
    },
    // productCart: (req, res) => {
    //     res.render('productCart');
    // },
    detail: (req, res) => {
        const product = products.find(element => element.id == req.params.id);
        res.render('productDetails', { product });
    },
    create: (req, res) => {
        res.render('product-create-form');
    },
    store: (req, res) => {

    },
    edit: (req, res) => {

    },
    update: (req, res) => {

    },
    destroy: (req, res) => {

    },
};

module.exports = controller;