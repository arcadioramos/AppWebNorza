const express = require('express');
const myConn = require('express-myconnection');
const mysql = require('mysql');
const path = require('path');

const app = express();

//importar rutas
const notasRoutes = require('./routes/nota');
const { urlencoded } = require('express');

//Config Express
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

const conn = {
    host:'localhost',
    user:'root',
    password: '',
    database: 'manejadordb',
    port: 3306
};

app.use(myConn(mysql,conn,'single'));
app.use(express.urlencoded({extended: false}));

//Rutas
app.get('/',notasRoutes);
app.post('/add',notasRoutes);
app.get('/delete/:id',notasRoutes);
app.get('/listo/:id',notasRoutes);

//Archivos Estaticos (CSS, JS, ETC... )
app.use(express.static(path.join(__dirname,'public')));


app.listen(app.get('port'), ()=>{
    console.log(`Servidor iniciado en el puerto ${app.get('port')}`);
});