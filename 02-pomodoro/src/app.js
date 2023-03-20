const express = require('express');
const path = require('path');

const app = express();

const routes = require('./routes/index.js');

app.listen(process.env.PORT || 3000);
console.log('Server is listening on port', process.env.PORT || 3000);

app.use(routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));


