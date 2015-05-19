"use strict";

var schemas = require('../schemas');

function AuthValidator(){};

AuthValidator.prototype = (function(){

	return {
		
		auth: {
			payload: (function payload() {
				var schema = new schemas.UsuarioSchema().schema;
				return {
					email: schema.email.required(),
					senha: schema.senha.required()
				};
			})()
		}
	};
})();

var authValidator = new AuthValidator();

module.exports = authValidator;