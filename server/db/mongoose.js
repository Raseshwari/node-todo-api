var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //setup Promise
mongoose.connect('mongodb://localhost:27017/TodosApp');

module.exports = {mongoose}