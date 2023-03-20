const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

const routes = require('./routes/index')

app.set('port', process.env.PORT || 3000);
// establece el puerto en el que se escuchará la aplicación. Si hay una variable de entorno 
// definida llamada PORT, utilizará ese valor para establecer el puerto, de lo contrario, 
// utilizará el valor 3000 por defecto.

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(routes)

app.listen(app.get('port'), () =>{
    //Servidor eecuchando en el puerto
    console.log("Servidor escuchando en el puerto " + app.get('port') );
}); 
