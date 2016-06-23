'use strict';

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var Schema = mongoose.Schema;

var messageSchema = new Schema({
	sender: {
		type: ObjectId,
		required: [true, 'Sender id is required']
	},
	recipient: {
		type: ObjectId,
		required: [true, 'Recipient is required']
	},
	text: {
		type: String,
		required: [true, 'Text is required']
	}
});

module.exports = mongoose.model('Message', messageSchema);