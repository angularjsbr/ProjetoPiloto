var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var org = require('organizacao');
var Projeto = new Schema({
nome:{type:String,required:true},
descricao:String,
organizacao:[org],
ativo:{type:Boolean, default:true}
});

module.exports = mongoose.model('Projeto',Projeto);