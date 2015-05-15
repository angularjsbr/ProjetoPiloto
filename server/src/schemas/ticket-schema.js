"use strict";

var Joi = require('joi');

function TicketSchema(){
	this.schema = {
		id: Joi.number().integer().label('informe um número'),
		titulo: Joi.string().label('informe uma string'),
		descricao: Joi.string().label('informe uma string'),
        tipo: Joi.string().label('informe uma string'),
        prioridade: Joi.string().label('informe uma string'),
        sprint: Joi.number().integer().label('informe um número'),
        data_inicio: Joi.date().label('informa uma data'),
        data_prevista: Joi.date().label('informa uma data'),
        status: Joi.number().integer().label('informe um número'),
        data_criacao: Joi.date().label('informa uma data'),
        criador: Joi.object().label('informe um objeto'),
        atribuido: Joi.object().label('informe um objeto'),
        ativo: Joi.boolean().default(true).label('informe um boolean')
	};
};

module.exports = TicketSchema;