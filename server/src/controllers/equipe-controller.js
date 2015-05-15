var Boom = require('boom');

var models = require('../models');

function EquipeController(){};

EquipeController.prototype = (function(){

	return {

	  	find: function (request, reply) {

	  		var equipe = {
	  			nome: 'name',
	  			organizacao: {
	  				descricao: 'organizacao'
	  			},
	  			usuario: {
	  				nome: 'usuario'
	  			}
	  		}

  			reply(equipe);

	  	},

	 	findByID: function (request, reply) {
		    
	  		var equipe = {
	  			nome: 'name',
	  			organizacao: {
	  				descricao: 'organizacao'
	  			},
	  			usuario: {
	  				nome: 'usuario'
	  			}
			}
				  		
  			reply(equipe);

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

var equipeController = new EquipeController();

module.exports = equipeController;

