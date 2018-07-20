//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//connect to local database or heroku database url
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to MongoDB');

	//arguments passed are filter (obj id), update (mongodb operators), options and callback if no callback then promise
	//http://mongodb.github.io/node-mongodb-native/3.1/api/Collection.html#findOneAndUpdate
	// db.collection('Todos').findOneAndUpdate({
	// 	_id: ObjectID("5b50b692fb7569dd0283dec6")
	// }, {
	// 	$set:{
	// 		completed : true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// })

	db.collection('Users').findOneAndUpdate({
		_id: ObjectID("5b5001d7fd74a94718dda022")
	}, {
		$inc:{
			age:-1
		}, $set : {
			name: "Rashu"
		}
	}, {
		returnOriginal : false
	}).then((result) =>{
		console.log(result);
	})

	//db.close();
});
