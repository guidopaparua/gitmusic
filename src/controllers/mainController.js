const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    index: (req, res) => {
        const instrumentos = products.filter(product => product.productType=='instrumento')
        res.render('index', {instrumentos});
    }
};

module.exports = controller;