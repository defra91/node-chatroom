'use strict';

var express = require('express');
var mongoose = require('mongoose');
var app = express();
var config = require('./config/env')[process.env.ENV];

require('./config/express')(app);
require('./config/routes')(app);

connect()
	.on('error', console.log)
	.on('disconnected', connect)
	.once('open', listen);


function listen() {
	app.listen(config.port, function() {
		console.log('App listening on port 3000');
	});
}

function connect() {
	var options = { server: { socketOptions: { keepAlive: 1 } } };
  	return mongoose.connect(config.db, options).connection;
}

module.exports = app;