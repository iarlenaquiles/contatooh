var mongoose = require('mongoose');

module.exports = function() {
	var schema = mongoose.Schema({
		nome: {
			type: String
		},
		email: {
			type: String
		}
	});
};