const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const db = require('../database/models');
const Op = db.Sequelize.Op;

const controller = {
	// (get) Root - Mostrar todos los productos
	index: (req, res) => {
		res.render('products',{
			 productsSent: products 
		})
	},

	// (get) Detail - Detalle de un producto
	detail: async (req, res) => {
	try {
		idABuscar = req.params.id;
		const product = await db.Product.findByPk(idABuscar)
		if(!product){
			return res.render('productNotFound')
		};
		return res.render('productDetails', {product})
	} catch (error) {
		res.render(error)
	}
},

	// (get) Create - Formulario para crear
	create: (req, res) => {
		res.render('productCreateForm')
	},
	
	// (post) Create -  Método para guardar la info
	store: async (req, res) => { 
		const newProduct = {
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			// ...req.body
			imagen: req.file.filename
		};
		try {
			await db.Product.create(newProduct)
			return res.redirect('/instrumentos')
		} catch (error) {
			res.send(error)
		}
	
	},

	// (get) Update - Formulario para editar
	edit: async (req, res) => {
		try {
			idABuscar = req.params.id;
			const product = await db.Product.findByPk(idABuscar)
			if(!product){
				return res.render('productNotFound')
			};
			return res.render('productEditForm', {product})
		} catch (error) {
			res.render(error)
		}
	},
	// (put) Update - Método ara actualizar la info
	update: async (req, res) => {	
		try{
		const idAEditar = req.body.id;
		const productToEdit = await db.Product.findByPk(idAEditar);

		await db.Product.update({
			name: req.body.name,
			price: req.body.price,
			discount: req.body.discount,
			category: req.body.category,
			description: req.body.description,
			// ...req.body
			imagen: req.file ? +req.file.filename : productToEdit.imagen
		}, {
			where: {
				id: productToEdit.id
			}
		})

		res.redirect("/products/"+idAEditar)}
		catch (error){
			res.send(error)
		}
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Eliminamos el producto que llegó por parámetro su ID
		let id = req.params.id;
		
		let finalProducts = products.filter(product => product.id != id);
		
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, " "));

		res.redirect("/products/");
	},
	
	cart : (req, res) => {
		res.render('productCart');
	}
};

module.exports = controller;