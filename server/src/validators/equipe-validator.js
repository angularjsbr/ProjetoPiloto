"use strict";

var Joi = require('joi');

var schemas = require('../schemas');

function EquipeValidator(){};

EquipeValidator.prototype = (function(){

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
				var schema = new schemas.EquipeSchema().schema;
				return {
					id: schema.id.required()
				};
			})()
		},		
		insert: {
			payload: (function payload() {
				var schema = new schemas.EquipeSchema().schema;
				return {
					nome: schema.nome.required(),
					usuario: schema.usuario.required(),	
					organizacao: schema.organizacao.required()
				};
			})()
		},

		update: {
			payload: (function payload() {
				var schema = new schemas.EquipeSchema().schema;
				return {
					nome: schema.nome.optional(),
					usuario: schema.usuario.optional(),	
					organizacao: schema.organizacao.optional()
				};
			})(),
			params: (function params() {
				var schema = new schemas.EquipeSchema().schema;
				return {
					id: schema.id.required()
				};
			})()
		},

		delete: {
			params: (function params() {
				var schema = new schemas.EquipeSchema().schema;
				return {
					id: schema.id.required()
				};
			})() 
		}
	};

})();

var equipeValidator = new EquipeValidator();

module.exports = equipeValidator;