'use strict';

var User = require('../models/user');

module.exports.create = function(req, res) {

	var user = new User(req.body);

	user.save(function(err) {
		if (err) {
			return res.status(500).json({
				error: err
			});
		}
		return res.json({
			message: 'User created correctly',
			user: user
		});
	});
};

module.exports.list = function(req, res) {
	User.find({}, function(err, users) {
		if (err) {
			return res.status(500).json({
				error: err
			});
		}
		return res.json(users);
	});
};

module.exports.get = function(req, res) {
	User.findById(req.params.id, function(err, doc) {
		if (err) {
			return res.status(500).json({
				error: err
			});
		}
		return res.json(doc);
	});
};