var mongoose = require('mongoose'),
Schema = mongoose.Schema,
Usuario = require('./usuario'),
Projeto = require('./projeto');

var Equipe = new Schema({
	nome:{type:String,required:true},
	usuario:[Usuario],
	projeto:[Projeto]
});

module.exports = mongoose.model('Equipe',Equipe);