var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Organizacao = new Schema({
	nome:{type:String,required:true},
	descricao:String,
	logo:String,
	ativo:{type:Boolean, default:true}
});

module.exports = mongoose.model('Organizacao',Organizacao);