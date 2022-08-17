// Módulos
const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routes/indexRouter')

// Acá falta uno... 😇
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

// Configuración
app.use(express.static('public'));
// Acá falta el template engine
app.use('/', indexRouter);
// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})
