var express = require('express');
var bodyParser = require('body-parser');

const {ObjectID} =  require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

// '/todo' forward slash for resource creation - creating a todo
app.post('/todos', (req, res) => {
	
	var todo = new Todo({
		text: req.body.text
	});
	
	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) =>{
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req, res) =>{
	var id = req.params.id;

	if(!ObjectID.isValid(id)){
		res.status(404).send('');
	}

	Todo.findById(id).then((todo) => {
		if(!todo){
			res.status(400);
		}
		res.status(200).send({todo});
	}, (e)=>{
		res.status(404);
	}).catch((e) => console.log(e));
});

app.listen(3000, ()=>{
	console.log('server up on port:3000');
});


module.exports = {app};