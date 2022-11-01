const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    ofertas: (req, res) => {
        const instrumentos = products;
        res.render('ofertas', { instrumentos });
    }
};

module.exports = controller;