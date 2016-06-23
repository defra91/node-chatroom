'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: {
		type: String,
		required: [true, 'Username is required'],
		validator: function(v) {
			return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(v);
		},
		unique: true
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
		validator: function(v) {
			return v.length >= 8;
		},
		message: 'password is not valid'
	},
	name: {
		type: String,
		unique: true
	}
});

module.exports = mongoose.model('User', userSchema);

