const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

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
    categoria: (req, res) => {
       	// 	const categoriaProducto = req.params.categoria;
       	// 	const product = products.find(product => product.category == categoriaProducto);
       	// 	if(!product){return res.render('productNotFound')};
       	// 	res.render('/instrumentos/' + categoriaProducto,{
    	// 		product: product
    	//    })

		const instrumentos = products;
		res.render('instrumentos/guitarras', { instrumentos });
	}
};

module.exports = controller;

