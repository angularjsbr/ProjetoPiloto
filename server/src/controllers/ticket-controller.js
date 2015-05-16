var Boom = require('boom');

var models = require('../models');

function TicketController(){};

TicketController.prototype = (function(){

	var Ticket = models.Ticket;

	return {

	  	find: function (request, reply) {

	  		Ticket.find().exec().then(
	  			function(ticket){
	  				reply(ticket);
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		);

	  	},

	 	findByID: function (request, reply) {
		    
	  		Ticket.findById(request.params._id).exec().then(
	  			function(ticket){
	  				if (ticket)
	  					reply(ticket);
	  				else 
	  					reply(Boom.badData('ticket nao encontrado'))
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		);

	  	},

	    insert: function(request, reply) {

	    	Ticket.create(request.payload).then(
          		function(ticket) { 
            		reply(ticket);
          		}, 
          		function(error) { 
		            reply(Boom.badData(error.message));
        		}
        	);

	 	},

	 	update: function (request, reply) {

 			Ticket.findByIdAndUpdate(request.params._id, request.payload).exec().then(
	  			function(ticket){
	  				if (ticket)
	  					reply(ticket);
	  				else 
	  					reply(Boom.badData('ticket nao encontradO'))
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		);		 

	 	},

		delete: function(request, reply) {

	    	Ticket.remove(request.params._id).then(
          		function(ticket) { 
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

var ticketController = new TicketController();

module.exports = ticketController;

