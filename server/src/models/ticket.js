var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Ticket = new Schema({
titulo:{type:String,required:true},
descricao:String,
tipo:String,
prioridade:String,
sprint:{type:Number,deafult:1},
data_inicio:{type:Date,required:true},
data_prevista:Date,
status:Number,
data_criacao:{type:Date,required:true,default:Date.now},
criado:{type:String,required:true},
atribuido:String
ativo:{type:Boolean, default:true}
});

module.exports = mongoose.model('Ticket',Ticket);