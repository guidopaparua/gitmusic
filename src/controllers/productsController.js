const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
	// (get) Root - Mostrar todos los productos
	index: (req, res) => {
		res.render('products',{
			 productsSent: products 
		})
	},

	// (get) Detail - Detalle de un producto
	detail: (req, res) => {
		const id = req.params.id;
		const product = products.find(product => product.id == id);
		res.render('detail',{
			productSent: product
	   })
	},

	// (get) Create - Formulario para crear
	create: (req, res) => {
		res.render('product-create-form')
	},
	
	// (post) Create -  Método para guardar la info
	store: (req, res) => {
		// Guradamos el producto
		let newProduct = {
			id: products[products.length - 1].id + 1,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			// ...req.body
			image: req.file.filename
		}
		products.push(newProduct);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, "  "));
		res.redirect("/products/")
	},

	// (get) Update - Formulario para editar
	edit: (req, res) => {
		const id = req.params.id;
		const product = products.find(product => product.id == id);
		
		res.render('product-edit-form', {
			productSent: product
		})
	},
	// (put) Update - Método ara actualizar la info
	update: (req, res) => {	
		// Editamos el producto que llegó por parámetro su ID

		let id = req.params.id;
		let productToEdit = products.find(product => {
			return product.id == id;
		});
		let editProduct = {
			id: id,
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			// ...req.body
			image: req.file ? req.file.filename : productToEdit.image
		}
		
		// Ya hemos modificado el array
		products.forEach((product, index) => {
			if(product.id == id) {
				products[index] = editProduct;
			}
		});

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));
		
		res.redirect("/products/")
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Eliminamos el producto que llegó por parámetro su ID
		let id = req.params.id;
		
		let finalProducts = products.filter(product => product.id != id);
		
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));

		res.redirect("/products/")	
	}
};

module.exports = controller;