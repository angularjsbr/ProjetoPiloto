var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var bcrypt = require('bcryptjs');
var Org = require('./organizacao');

var Usuario = new Schema({
	nome:{type:String,required:true},
	email:{type:String,required:true},
	senha:{type:String,required:true},
	organizacao:[Org],
	ativo:{type:Boolean, default:true}
});

Usuario.methods.gerarHash = function(senha) {
    return bcrypt.hashSync(senha, bcrypt.genSaltSync(8), null);
};

Usuario.methods.validarSenha = function(senha) {
    return bcrypt.compareSync(senha, this.senha);
};

module.exports = mongoose.model('Usuario',Usuario);

