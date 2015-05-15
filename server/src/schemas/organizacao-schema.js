"use strict";

var Joi = require('joi');

function OrganizacaoSchema(){
	this.schema = {
		id: Joi.number().integer().label('informe um número'),
		nome: Joi.string().label('informe uma string'),
		descricao: Joi.string().label('informe uma string'),
		logo: Joi.string().label('informe uma string'),
        ativo: Joi.boolean().default(true).label('informe um boolean')
	};
};

module.exports = OrganizacaoSchema;