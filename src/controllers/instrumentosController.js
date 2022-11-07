const fs = require('fs');
const path = require('path');
const db = require('../database/models');
// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

// const controller = {

// 	// // (get) Detail - Detalle de un producto
// 	// detail: (req, res) => {
// 	// 	const id = req.params.id;
// 	// 	const product = products.find(product => product.id == id);
// 	// 	if(!product){return res.render('productNotFound')};
// 	// 	res.render('productDetails',{
// 	// 		product: product
// 	//    })
// 	// },

   
//     categoria: (req, res) => {
// 		const categoria = req.params.categoria;
// 		const product = products.find(product => product.category == categoria);
// 		if(!product){return res.render('productNotFound')};
// 		res.render('/instrumentos/guitarras' + categoria,{
// 			product: product
// 	   })
// 	}


// };

const controller ={
    guitarras: (req, res) => {

		db.Product.findAll(
		{
            where: {
                category: 1
            }
        }
		)
			.then( (products) =>{
            	return res.render('instrumentos/guitarras', {products})
       		})
            .catch(error => {
                console.log(error)
                res.send(500);
            })
	},
	bajos: (req, res) => {

		db.Product.findAll(
			{
				where: {
					category: 3
				}
			}
			)
				.then( (products) =>{
					return res.render('instrumentos/bajos', {products})
				   })
				.catch(error => {
					console.log(error)
					res.send(500);
				})
	},
	vientos: (req, res) => {
 
		db.Product.findAll(
			{
				where: {
					category: 5
				}
			}
			)
				.then( (products) =>{
					return res.render('instrumentos/vientos', {products})
				   })
				.catch(error => {
					console.log(error)
					res.send(500);
				})
	},
	teclados: (req, res) => {

		db.Product.findAll(
			{
				where: {
					category: 6
				}
			}
			)
				.then( (products) =>{
					return res.render('instrumentos/teclados', {products})
				   })
				.catch(error => {
					console.log(error)
					res.send(500);
				})
	},
	percusion: (req, res) => {

		db.Product.findAll(
			{
				where: {
					category: 2
				}
			}
			)
				.then( (products) =>{
					return res.render('instrumentos/percusion', {products})
				   })
				.catch(error => {
					console.log(error)
					res.send(500);
				})
	},
	amplificadores: (req, res) => {

		db.Product.findAll(
			{
				where: {
					category: 4
				}
			}
			)
				.then( (products) =>{
					return res.render('instrumentos/amplificadores', {products})
				   })
				.catch(error => {
					console.log(error)
					res.send(500);
				})
	}
};

module.exports = controller;

