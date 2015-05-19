"use strict";

var Boom = require('boom');
var jwt = require('jsonwebtoken');
var config = require('config');

var models = require('../models');

function ContactControLler(){};

ContactControLler.prototype = (function(){

	var Usuario = models.Usuario;

	return {

	  	auth: function (request, reply) {

	  		var auth = request.payload;

	    	Usuario.findOne({
		    	email : auth.email
			}).then(function(usuario) {

		      	if (!usuario)
		        	return reply(Boom.unauthorized('usuario invalido'));

		      	if (!usuario.validarSenha(auth.senha))
		        	return reply(Boom.unauthorized('usuario invalido'));

		      	var token = jwt.sign(
		      		{
		        		usuario: usuario.get('_id')
		      		}, 
		      		config.get('token.secret'), config.get('token.options')
		      	);

		      	reply({
        			token: token
      			});
		    }); 
	  	},

	    getAuth: function(request, reply) {

	    	reply(request.auth.credentials);

		}	 	

	}

})();

var contactControLler = new ContactControLler();

module.exports = contactControLler;

