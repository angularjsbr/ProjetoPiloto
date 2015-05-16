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
		    
	  		Usuario.findById(request.params._id).exec().then(
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

	    	Usuario.create(request.payload).then(
          		function(usuario) { 
            		reply(usuario);
          		}, 
          		function(error) { 
		            reply(Boom.badData(error.message));
        		}
        	);	    	

	 	},

	 	update: function (request, reply) {

			Usuario.findByIdAndUpdate(request.params._id, request.payload).exec().then(
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

		delete: function(request, reply) {

	    	Usuario.remove(request.params._id).then(
          		function(usuario) { 
            		reply({
            			success: true
            		});
          		}, 
          		function(error) { 
		            reply(Boom.badData(error.message));
        		}
        	);		
		}
	}

})();

var usuarioController = new UsuarioController();

module.exports = usuarioController;
