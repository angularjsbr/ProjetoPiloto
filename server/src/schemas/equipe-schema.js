"use strict";

var Joi = require('joi');

function EquipeSchema(){
	this.schema = {
		id: Joi.number().integer().label('informe um número'),
		nome: Joi.string().label('informe uma string'),
        organizacao: Joi.object().label('informe um objeto'),
        usuario: Joi.object().label('informe um objeto')
	};
};

module.exports = EquipeSchema;