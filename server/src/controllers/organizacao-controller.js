var Boom = require('boom');

var models = require('../models');

function OrganizacaoController(){};

OrganizacaoController.prototype = (function(){

	var Organizacao = models.Organizacao;

	return {

	  	find: function (request, reply) {

	  		Organizacao.find().exec().then(
	  			function(organizacoes){
	  				reply(organizacoes);
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		);

	  	},

	 	findByID: function (request, reply) {
		    
		   	Organizacao.findById(request.params._id).exec().then(
	  			function(organizacao){
	  				if (organizacao)
	  					reply(organizacao);
	  				else 
	  					reply(Boom.badData('organizacao nao encontrada'))
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		);

	  	},

	    insert: function(request, reply) {

	    	Organizacao.create(request.payload).then(
          		function(organizacao) { 
            		reply(organizacao);
          		}, 
          		function(error) { 
		            reply(Boom.badData(error.message));
        		}
        	);

	 	},

	 	update: function (request, reply) {

			Organizacao.findByIdAndUpdate(request.params._id, request.payload).exec().then(
	  			function(organizacao){
	  				if (organizacao)
	  					reply(organizacao);
	  				else 
	  					reply(Boom.badData('organizacao nao encontrada'))
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		); 

	 	},

		delete: function(request, reply) {

	    	Organizacao.remove(request.params._id).then(
          		function(organizacao) { 
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

var organizacaoController = new OrganizacaoController();

module.exports = organizacaoController;

