'use strict';

var users = require('../controllers/users');
var messages = require('../controllers/messages');

module.exports = function(app) {

	app.get('/', function(req, res) {
		res.send('Hello from node-chatroom API');
	});

	app.get('/users', users.list);
	app.get('/users/:id', users.get);
	app.post('/users', users.create);

	app.get('/messages/:senderId/:recipientId', messages.getBySenderAndRecipient);
	app.post('/messages', messages.send);
};