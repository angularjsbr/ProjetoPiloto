"use strict";

var Joi = require('joi');

var schemas = require('../schemas');

function OrganizacaoValidator(){};

OrganizacaoValidator.prototype = (function(){

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
				var schema = new schemas.OrganizacaoSchema().schema;
				return {
					id: schema.id.required()
				};
			})()
		},		
		insert: {
			payload: (function payload() {
				var schema = new schemas.OrganizacaoSchema().schema;
				return {
					nome: schema.nome.required(),
					descricao: schema.descricao.required(),
					logo: schema.logo.required(),	
					ativo: schema.ativo.required()
				};
			})()
		},

		update: {
			payload: (function payload() {
				var schema = new schemas.OrganizacaoSchema().schema;
				return {
					nome: schema.nome.optional(),
					descricao: schema.descricao.optional(),
					logo: schema.logo.optional(),	
					ativo: schema.ativo.optional()
				};
			})(),
			params: (function params() {
				var schema = new schemas.OrganizacaoSchema().schema;
				return {
					id: schema.id.required()
				};
			})()
		},

		delete: {
			params: (function params() {
				var schema = new schemas.OrganizacaoSchema().schema;
				return {
					id: schema.id.required()
				};
			})() 
		}
	};

})();

var organizacaoValidator = new OrganizacaoValidator();

module.exports = organizacaoValidator;