"use strict";

var Joi = require('joi');

var schemas = require('../schemas');

function TicketValidator(){};

TicketValidator.prototype = (function(){

	return {

		find: {
			query: (function query() {
				return {
					page: Joi.number().integer().optional(),
					search: Joi.string().optional()
				};
			})()
		},
		findByID: {
			params: (function payload() {
				var schema = new schemas.TicketSchema().schema;
				return {
					id: schema.id.required()
				};
			})()
		},		
		insert: {
			payload: (function payload() {
				var schema = new schemas.TicketSchema().schema;
				return {
					titulo: 		schema.titulo.required(),
					descricao: 		schema.descricao.optional(),
			        tipo: 			schema.tipo.optional(),
			        prioridade: 	schema.prioridade.optional(),
			        sprint: 		schema.sprint.required(),
			        data_inicio:   	schema.data_inicio.required(),
			        data_prevista: 	schema.data_prevista.optional(),
			        status:  	   	schema.status.optional(),
			        data_criacao: 	schema.data_criacao.required(),
			        criador: 		schema.criador.required(),
			        atribuido: 		schema.atribuido.required(),
			        ativo: 			schema.ativo.required()
				};
			})()
		},

		update: {
			payload: (function payload() {
				var schema = new schemas.TicketSchema().schema;
				return {
					titulo: 		schema.titulo.optional(),
					descricao: 		schema.descricao.optional(),
			        tipo: 			schema.tipo.optional(),
			        prioridade: 	schema.prioridade.optional(),
			        sprint: 		schema.sprint.optional(),
			        data_inicio:   	schema.data_inicio.optional(),
			        data_prevista: 	schema.data_prevista.optional(),
			        status:  	   	schema.status.optional(),
			        data_criacao: 	schema.data_criacao.optional(),
			        criador: 		schema.criador.optional(),
			        atribuido: 		schema.atribuido.optional(),
			        ativo: 			schema.ativo.optional()
				};
			})(),
			params: (function params() {
				var schema = new schemas.TicketSchema().schema;
				return {
					id: schema.id.required()
				};
			})()
		},

		delete: {
			params: (function params() {
				var schema = new schemas.TicketSchema().schema;
				return {
					id: schema.id.required()
				};
			})() 
		}
	};

})();

var equipeValidator = new TicketValidator();

module.exports = equipeValidator;