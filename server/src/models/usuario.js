var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var Org = require('./organizacao');
var Usuario = new Schema({
nome:{type:String,required:true},
email:{type:String,required:true},
senha:{type:String,required:true},
organizacao:[Org]
ativo:{type:Boolean, default:true}
});

module.exports = mongoose.model('Usuario',Usuario);