var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressThymeleaf = require('express-thymeleaf');
var {TemplateEngine} = require('thymeleaf');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var templateEngine = new TemplateEngine();

app.engine('html',expressThymeleaf(templateEngine));

app.set('view engine', 'html');

app.use(express.static('views'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
