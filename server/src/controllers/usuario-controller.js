var Boom = require('boom');

var models = require('../models');

function UsuarioController(){};

UsuarioController.prototype = (function(){

	return {

	  	find: function (request, reply) {

	  		var usuario = {
	  			nome: 'name',
	  			organizacao: {
	  				descricao: 'organizacao'
	  			},
	  			email: 'email@gmail.com',
	  			senha: 'senha',
	  			ativo: true
	  		}

  			reply(usuario);

	  	},

	 	findByID: function (request, reply) {
		    
	  		var usuario = {
	  			nome: 'name',
	  			organizacao: {
	  				descricao: 'organizacao'
	  			},
	  			email: 'email@gmail.com',
	  			senha: 'senha',
	  			ativo: true
	  		}
	  		
  			reply(usuario);

	  	},

	    insert: function(request, reply) {

			reply(request.payload);

	 	},

	 	update: function (request, reply) {

 			reply(request.payload);		 

	 	},

		delete: function(request, reply) {

			reply({
				delete : request.params
			});	
			
		}
	}

})();

var usuarioController = new UsuarioController();

module.exports = usuarioController;

