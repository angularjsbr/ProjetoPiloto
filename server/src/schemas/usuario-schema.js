"use strict";

var Joi = require('joi');

function UsuarioSchema(){
	this.schema = {
		_id: Joi.number().integer().label('informe um número'),
		nome: Joi.string().label('informe uma string'),
		senha: Joi.string().label('informe uma string'),
        email: Joi.string().email().label('informe um e-mail valido'),
        organizacao: Joi.object().label('informe um objeto'),
        ativo: Joi.boolean().default(true).label('informe um boolean')
	};
};

module.exports = UsuarioSchema;