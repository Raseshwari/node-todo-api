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

	// db.collection('Todos').find({
	// 	_id: new ObjectID("5b4ffa0b8cecaf1fac4f2f13")
	// 	}).toArray().then((docs) => {
	// 	console.log("Todos");
	// 	console.log(JSON.stringify(docs, undefined, 2));

	// }, (err) => {
	// 	console.log('Unable to fetch Todos',err);
	// });


	// db.collection('Todos').find().count().then((count) => {
	// 	console.log("Todos");
	// 	console.log(`Todos count: ${count}`);

	// }, (err) => {
	// 	console.log('Unable to fetch Todos',err);
	// });

	// db.collection('Users').find({name:'Rashu'}).toArray().then((docs) => {
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log("Unable to fetch Users");
	// });

	db.collection('Users').find({name:'Rashu'}).count().then((count) => {
		console.log(`Number of records with name:Rashu are : ${count}`);
	}, (err) => {
		console.log("Unable to fetch Users");
	})

	//db.close();
});
