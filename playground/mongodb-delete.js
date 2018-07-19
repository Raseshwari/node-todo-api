//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// //destructuring an object. i.e., pulling out name property from user object
// var user = {name:'Rashu', age:27};
// var {name} = user;
// console.log(name);
//connect to local database or heroku database url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB');

	//deleteMany
	// db.collection('Todos').deleteMany({text:'Eat Lunch'}).then((result) =>{
	// 	console.log(result);
	// });

	//deleteOne
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({name: 'Rashu'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').find().toArray().then((docs) => {
	// 	console.log(docs);
	// });

	db.collection('Users').findOneAndDelete({
		_id : ObjectID('5b4ffe28c114ee43683e151c')
	}).then((result) => {
		console.log(result);
	});

	//db.close();
});
