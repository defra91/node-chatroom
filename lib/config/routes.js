'use strict';

var users = require('../controllers/users');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.send('Hello from node-chatroom API');
	});

	app.get('/users', users.list);
	app.get('/users/:id', users.get);
	app.post('/users', users.create);
};