const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productsCategoryFilePath = path.join(__dirname, '../data/productsDataBaseCategory.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const productsCategory = JSON.parse(fs.readFileSync(productsCategoryFilePath, 'utf-8'));

const controller = {
    index: (req, res) => {
        const instrumentos = productsCategory
        res.render('index', { instrumentos });
    },
    search: (req, res) => {
        db.Products.findAll({
            where: {
                title: { [Op.like]: `%${req.query.search}%` }
            }
        })
            .then(function (productos) {
                res.render('products', { products })
            })
            .catch(error => {
                console.log(error)
                res.send(500);
            })
    },
    instrumentos: (req, res) => {
        const instrumentos = products
        res.render('instrumentos', { instrumentos });
    }
};

module.exports = controller;