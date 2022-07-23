const express = require("express");
const path = require("path");


const app = express();
const publicPath = path.resolve(__dirname, "./public");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(publicPath));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor iniciado en: http://localhost:" + port);
});
app.get("/", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
});
app.get("/register", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});
app.get("/productDetails", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/productDetails.html"))
})
app.get("/productCart", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
})
app.get("/login", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})
