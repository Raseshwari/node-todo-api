//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//destructuring an object. i.e., pulling out name property from user object
var user = {name:'Rashu', age:27};
var {name} = user;
console.log(name);
//connect to local database or heroku database url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if(err){
	// 		return console.log('Unable to insert ToDo',err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.collection('Users').insertOne({
		name : 'Rashu',
		age: 27,
		location: 'Mumbai'
	}, (err, result) => {
		if(err){
			return console.log('Unable to insert ToDo',err);
		}

		console.log(result.ops[0]._id.getTimestamp());
	});
	db.close();
});
