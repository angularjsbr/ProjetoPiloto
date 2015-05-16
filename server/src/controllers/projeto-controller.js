var Boom = require('boom');

var models = require('../models');

function ProjetoController(){};

ProjetoController.prototype = (function(){

	var Projeto = models.Projeto;

	return {

	  	find: function (request, reply) {

  			Projeto.find().exec().then(
	  			function(projetos){
	  				reply(projetos);
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		);

	  	},

	 	findByID: function (request, reply) {
		    
	  		Projeto.findById(request.params._id).exec().then(
	  			function(projeto){
	  				if (projeto)
	  					reply(projeto);
	  				else 
	  					reply(Boom.badData('projeto nao encontrado'))
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		);

	  	},

	    insert: function(request, reply) {

	    	Projeto.create(request.payload).then(
          		function(projeto) { 
            		reply(projeto);
          		}, 
          		function(error) { 
		            reply(Boom.badData(error.message));
        		}
        	);

	 	},

	 	update: function (request, reply) {

 			Projeto.findByIdAndUpdate(request.params._id, request.payload).exec().then(
	  			function(projeto){
	  				if (projeto)
	  					reply(projeto);
	  				else 
	  					reply(Boom.badData('projeto nao encontrada'))
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		);		 

	 	},

		delete: function(request, reply) {

	    	Projeto.remove(request.params._id).then(
          		function(projeto) { 
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

var projetoController = new ProjetoController();

module.exports = projetoController;

