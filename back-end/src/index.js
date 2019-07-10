var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./controllers/authController')(app);
require('./controllers/alunoController')(app);
require('./controllers/professorController')(app);
require('./controllers/orientacaoController')(app);


app.listen(3000);

