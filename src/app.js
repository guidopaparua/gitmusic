const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser')

//Multer
app.use(express.urlencoded({extended : false}));
app.use(express.json());


//MethodOverride
const methodOverride = require('method-override');
app.use(methodOverride('_method'));


const mainRouter = require('./routes/mainRouter');
const loginRouter = require('./routes/loginRouter');
const productsRouter = require('./routes/productsRouter');
const registerRouter = require('./routes/registerRouter');
const ofertasRouter = require('./routes/ofertasRouter');
const instrumentosRouter = require('./routes/instrumentosRouter');
//DATABASE
const DbProductsRouter = require('./routes/DbProductsRouter');
const DbUsersRouter = require('./routes/DbUsersRouter');
//Middlwares
const cookieAuthMiddleware = require('./middlewares/cookieAuthMiddleware');
//api routes
const userApiRouters = require('./routes/api/userRouter');
const productApiRouters = require('./routes/api/productRouter');
//end api routes

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static('public'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor iniciado en: http://localhost:" + port);
});
const cors = require('cors')
app.use(cors()) // para que no hayan problemas con con cors cuando consumimos la api

app.use(session(
    {
      secret: "Secreto",
      resave: false,
      saveUninitialized: true
  }));
app.use(cookieParser());
app.use(cookieAuthMiddleware);

app.use('/', mainRouter);
app.use('/login', loginRouter);
app.use('/products', productsRouter);
app.use('/register', registerRouter);
app.use('/ofertas', ofertasRouter);
app.use('/instrumentos', instrumentosRouter);
app.use('/logout', loginRouter);
//DATABASE
app.use('/product', DbProductsRouter);
app.use('/Users', DbUsersRouter);
//api routes
app.use('/api/user', userApiRouters);
app.use('/api/product', productApiRouters);
//end api routes
//ERROR 404
app.use((req, res, next) => {
    res.status('404').render('notFound')
})
