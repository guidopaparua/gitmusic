const controller = {
    index: (req, res) => {
        res.render('products');
    },
    // productCart: (req, res) => {
    //     res.render('productCart');
    // },
    detail: (req, res) => {
        res.render('productDetails');
        // const product = products.find(element => element.id == req.params.id);
        // res.render('detail', { product });
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