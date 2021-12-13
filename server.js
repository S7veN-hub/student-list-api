const morgan = require('morgan');
const routerStudents = require('./routes/routes-estudiantes/routesStudents');
const express = require('express');
const app = express();

app.set('port', process.env.POTY || 3000);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use(routerStudents);

app.listen(app.set('port'), () => {
    console.log('Node Server Working on port', app.set('port'));
});