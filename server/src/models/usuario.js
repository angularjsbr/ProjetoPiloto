var mongoose = require('mongoose'),
Schema = mongoose.Schema;
var org = require('./organizacao');
var Usuario = new Schema({
nome:{type:String,required:true},
email:{type:String,required:true},
senha:{type:String,required:true},
organizacao:[org]
ativo:{type:Boolean, default:true}
});

module.exports = mongoose.model('Usuario',Usuario);