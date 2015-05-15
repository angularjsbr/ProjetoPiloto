var mongoose = require('mongoose'),
Schema = mongoose.Schema,
Usuario = require('./usuario'),
Projeto = require('./Projeto');

var Equipe = new Schema({
nome:{type:String,required:true},
usuario:[Usuario]
projeto:[Projeto]
});

module.exports = mongoose.model('Equipe',Equipe);