const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require('./routes/mainRouter');
const loginRouter = require('./routes/loginRouter');
const productsRouter = require('./routes/productsRouter');
const registerRouter = require('./routes/registerRouter');
//DATABASE
const ProductsDbRouter = require('./routes/ProductsDbRouter');
const UsersDbRouter = require('./routes/UsersDbRouter');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor iniciado en: http://localhost:" + port);
});

app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/products', productsRouter);
app.use('/register', registerRouter);
//DATABASE
app.use('/Products', ProductsDbRouter);
app.use('/Users', UsersDbRouter);