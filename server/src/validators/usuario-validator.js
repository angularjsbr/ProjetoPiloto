"use strict";

var Joi = require('joi');

var schemas = require('../schemas');

function UsuarioValidator(){};

UsuarioValidator.prototype = (function(){

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
				var schema = new schemas.UsuarioSchema().schema;
				return {
					_id: schema._id.required()
				};
			})()
		},		
		insert: {
			payload: (function payload() {
				var schema = new schemas.UsuarioSchema().schema;
				return {
					nome: schema.nome.required(),
					organizacao: schema.organizacao.required(),
					email: schema.email.required(),
					senha: schema.senha.required(),
					ativo: schema.ativo.required()
				};
			})()
		},

		update: {
			payload: (function payload() {
				var schema = new schemas.UsuarioSchema().schema;
				return {
					nome: schema.nome.optional(),
					organizacao: schema.organizacao.optional(),
					email: schema.email.optional(),
					senha: schema.senha.optional(),
					ativo: schema.ativo.optional()
				};
			})(),
			params: (function params() {
				var schema = new schemas.UsuarioSchema().schema;
				return {
					_id: schema._id.required()
				};
			})()
		},

		delete: {
			params: (function params() {
				var schema = new schemas.UsuarioSchema().schema;
				return {
					_id: schema._id.required()
				};
			})() 
		}
	};

})();

var usuarioValidator = new UsuarioValidator();

module.exports = usuarioValidator;