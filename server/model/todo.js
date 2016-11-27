var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var todoSchema = new Schema({
	text: String,
	done: Boolean,
	color: String,
	date: Date
})

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;