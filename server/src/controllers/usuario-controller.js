var Boom = require('boom');

var models = require('../models');

function UsuarioController(){};

UsuarioController.prototype = (function(){

	var Usuario = models.Usuario;

	return {

	  	find: function (request, reply) {

	  		Usuario.find().exec().then(
	  			function(usuarios){
	  				reply(usuarios);
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		);
	  	},

	 	findByID: function (request, reply) {
		    
	  		Usuario.findById(request.params.id).exec().then(
	  			function(usuario){
	  				if (usuario)
	  					reply(usuario);
	  				else 
	  					reply(Boom.badData('usuario nao encontrado'))
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		);
 			
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
