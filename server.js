'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var companiesController = require('./controllers/company');
var config = require('./config/config');
var router = require('./routes/routes');

var app = express();
var port = process.env.PORT || 3000;

mongoose.connect(config.db.mongodb);

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/v1', router);
app.listen(port);

console.log(`ourikas server is running on port ${port} in ${process.env.NODE_ENV} mode`);

module.exports = app;
