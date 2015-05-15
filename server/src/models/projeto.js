var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var Org = require('./organizacao');

var Projeto = new Schema({
nome:{type:String,required:true},
descricao:String,
organizacao:[Org],
ativo:{type:Boolean, default:true}
});

module.exports = mongoose.model('Projeto',Projeto);