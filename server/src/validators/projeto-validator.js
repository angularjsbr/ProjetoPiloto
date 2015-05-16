"use strict";

var Joi = require('joi');

var schemas = require('../schemas');

function ProjetoValidator(){};

ProjetoValidator.prototype = (function(){

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
				var schema = new schemas.ProjetoSchema().schema;
				return {
					_id: schema._id.required()
				};
			})()
		},		
		insert: {
			payload: (function payload() {
				var schema = new schemas.ProjetoSchema().schema;
				return {
					nome: schema.nome.required(),
					descricao: schema.descricao.optional(),
					organizacao: schema.organizacao.required(),	
					ativo: schema.ativo.required()
				};
			})()
		},

		update: {
			payload: (function payload() {
				var schema = new schemas.ProjetoSchema().schema;
				return {
					nome: schema.nome.optional(),
					descricao: schema.descricao.optional(),
					organizacao: schema.organizacao.optional(),	
					ativo: schema.ativo.optional()
				};
			})(),
			params: (function params() {
				var schema = new schemas.ProjetoSchema().schema;
				return {
					_id: schema._id.required()
				};
			})()
		},

		delete: {
			params: (function params() {
				var schema = new schemas.ProjetoSchema().schema;
				return {
					_id: schema._id.required()
				};
			})() 
		}
	};

})();

var projetoValidator = new ProjetoValidator();

module.exports = projetoValidator;