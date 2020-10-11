const express = require('express');
const mysql = require('mysql');
const myConn = require('express-myconnection');
const path = require('path');

const app = express();

//importar rutas
const notaRoutes = require('./routes/nota.js');
const { urlencoded } = require('express');

//Config
app.set('port',process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


//Middlewares
app.use(myConn(mysql,{
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'manejadordb',
    port: 3306
}, 'single'));

app.use(express.urlencoded({extended: false}));

//Rutas
app.use('/',notaRoutes);
app.post('/add',notaRoutes);

//Archivos Estaticos
app.use(express.static(path.join(__dirname,'public')));


//app.get('/', (req, res) => res.send('Hello World!'))
app.listen(app.get('port'), () => console.log(`Example app listening on port port!`))