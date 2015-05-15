var Boom = require('boom');

var models = require('../models');

function TicketController(){};

TicketController.prototype = (function(){

	return {

	  	find: function (request, reply) {

	  		var ticket = {
	  			titulo: 'titulo',
				descricao: 'descricao',
				tipo: 'tipo',
				prioridade: 'prioridade',
				sprint: 1,
				data_inicio: new Date(),
				data_prevista: new Date(),
				status: 1,
				data_criacao: new Date(),
				criador: {
					id: 1,
					nome: 'usuario'
				},
				atribuido:{
					id: 1,
					nome: 'usuario'
				},
				ativo:false
	  		}

  			reply(ticket);

	  	},

	 	findByID: function (request, reply) {
		    
	  		var ticket = {
	  			titulo: 'titulo',
				descricao: 'descricao',
				tipo: 'tipo',
				prioridade: 'prioridade',
				sprint: 1,
				data_inicio: new Date(),
				data_prevista: new Date(),
				status: 1,
				data_criacao: new Date(),
				criador: {
					id: 1,
					nome: 'usuario'
				},
				atribuido:{
					id: 1,
					nome: 'usuario'
				},
				ativo:false
	  		}
	  		
  			reply(ticket);

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

var ticketController = new TicketController();

module.exports = ticketController;

