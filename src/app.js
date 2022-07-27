const express = require('express');
const app = express();
const path = require('path');

const mainRouter = require('./routes/mainRouter');
const loginRouter = require('./routes/loginRouter');
const productCartRouter = require('./routes/productCartRouter');
const productDetailsRouter = require('./routes/productDetailsRouter');
const registerRouter = require('./routes/registerRouter');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor iniciado en: http://localhost:" + port);
});

app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/productCart', productCartRouter);
app.use('/productDetails', productDetailsRouter);
app.use('/register', registerRouter);