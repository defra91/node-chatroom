'use strict';

var Message = require('../models/message');

module.exports.getBySenderAndRecipient = function(req, res) {

	var senderId    = req.params.senderId;
	var recipientId = req.params.recipientId;

	var query = {
		$or: [
			{
				sender: senderId,
				recipient: recipientId
			},
			{
				sender: recipientId,
				recipient: senderId
			}
		]
	};	

	return Message.find(query, function(err, docs) {
		if (err) {
			return res.status(500).json({
				error: err
			});
		}
		return res.json(docs);
	});	
};

module.exports.send = function(req, res) {

	var message = new Message(req.body);

	message.save(function(err) {
		if (err) {
			res.status(500).json({
				error: err
			});
		}
		return res.json({
			message: 'Message sent correctly',
			object: message
		});
	});
};