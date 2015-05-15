var Boom = require('boom');

var models = require('../models');

function OrganizacaoController(){};

OrganizacaoController.prototype = (function(){

	return {

	  	find: function (request, reply) {

	  		var organizacao = {
	  			nome: 'nome',
	  			logo: 'logo',
	  			descricao: 'organizacao',
	  			ativo: true
	  		}

  			reply(organizacao);

	  	},

	 	findByID: function (request, reply) {
		    
	  		var organizacao = {
	  			nome: 'nome',
	  			logo: 'logo',
	  			descricao: 'organizacao',
	  			ativo: true
	  		}
	  		
  			reply(organizacao);

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

var organizacaoController = new OrganizacaoController();

module.exports = organizacaoController;

