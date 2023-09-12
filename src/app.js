const express = require('express'); //referencia a framework express
const app = express(); //se crea la apliacion de express
const log = require('morgan'); //para saber los clientes conectados
const bodyParse = require('body-parser');
const path = require('path');

const IndexRoutes = require('./routers/index.js');
const { default: mongoose } = require('mongoose');

app.set('port', process.env.PORT || 3000); //asigno puerto 300

//Middleware utliza morgan 
app.use(log('dev'));
app.use(bodyParse.urlencoded({extended:false}));
//rutas
app.use('/',IndexRoutes);

app.listen(app.get('port'), () => {
    console.log('El servidor esta funcionando en el puerto', app.get('port'));
}
);

//conectar a BD 
mongoose.connect("mongodb+srv://node:MVqePmClDMmjrzFn@cluster0.dkgsrst.mongodb.net/PuntoVenta?retryWrites=true&w=majority")
.then(bd=>console.log('BD conectada!'))
.catch(err=>console.log('err'));


//establecer sistema de vistas
app.set('views', path.join(__dirname, 'views')); //establece el valor y hace union 
app.set('view engine', 'ejs');


//desplegar mensaje de conectado