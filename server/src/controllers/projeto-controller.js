var Boom = require('boom');

var models = require('../models');

function ProjetoController(){};

ProjetoController.prototype = (function(){

	return {

	  	find: function (request, reply) {

	  		var projeto = {
	  			nome: 'name',
	  			organizacao: {
	  				descricao: 'organizacao'
	  			},
	  			descricao: 'projeto',
	  			ativo: true
	  		}

  			reply(projeto);

	  	},

	 	findByID: function (request, reply) {
		    
	  		var projeto = {
	  			nome: 'name',
	  			organizacao: {
	  				descricao: 'organizacao'
	  			},
	  			descricao: 'projeto',
	  			ativo: true
	  		}
	  		
  			reply(projeto);

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

var projetoController = new ProjetoController();

module.exports = projetoController;

