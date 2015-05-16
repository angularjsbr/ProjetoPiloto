"use strict";

var Joi = require('joi');

function ProjetoSchema(){
	this.schema = {
		_id: Joi.label('informe um número'),
		nome: Joi.string().label('informe uma string'),
		descricao: Joi.string().label('informe uma string'),
        organizacao: Joi.object().label('informe um objeto'),
        ativo: Joi.boolean().default(true).label('informe um boolean')
	};
};

module.exports = ProjetoSchema;