var Boom = require('boom');

var models = require('../models');

function UserController(){};

UserController.prototype = (function(){

	return {

	  	find: function (request, reply) {

	  		var user = {
	  			name: 'name',
	  			lastName: 'last name'
	  		}
	  		
  			reply(user);

	  	},

	 	findByID: function (request, reply) {
		    
		    var user = {
	  			name: 'name',
	  			lastName: 'last name'
	  		}
	  		
  			reply(user);

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

var userController = new UserController();

module.exports = userController;

