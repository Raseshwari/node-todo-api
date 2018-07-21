const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/user');

// var id = '5b53c2c38669bf203063427';

// if(!ObjectID.isValid(id)){
// 	console.log('ID not valid!')
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos', todos);
// })

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('id not found!');
// 	}
// 	console.log('TodoById', todo);
// }).catch((e) => console.log(e));

var id = '5b52269f3a8168482727c912';

User.findById(id).then((user) => {
	if(!user){
		return console.log('user not found!');
	}
	console.log('User: ', user);
}).catch((e) => console.log(e));