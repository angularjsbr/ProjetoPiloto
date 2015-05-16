var Boom = require('boom');

var models = require('../models');

function EquipeController(){};

EquipeController.prototype = (function(){

	var Equipe = models.Equipe;

	return {

	  	find: function (request, reply) {

	  		Equipe.find().exec().then(
	  			function(equipes){
	  				reply(equipes);
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		);
	  	},

	 	findByID: function (request, reply) {
		    
	  		Equipe.findById(request.params._id).exec().then(
	  			function(equipe){
	  				if (equipe)
	  					reply(equipe);
	  				else 
	  					reply(Boom.badData('equipe nao encontrada'))
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		);

	  	},

	    insert: function(request, reply) {

	    	Equipe.create(request.payload).then(
          		function(equipe) { 
            		reply(equipe);
          		}, 
          		function(error) { 
		            reply(Boom.badData(error.message));
        		}
        	);	

	 	},

	 	update: function (request, reply) {

 			Equipe.findByIdAndUpdate(request.params._id, request.payload).exec().then(
	  			function(equipe){
	  				if (equipe)
	  					reply(equipe);
	  				else 
	  					reply(Boom.badData('equipe nao encontrada'))
	  			},
	  			function(error){
	  				reply(Boom.badData(error.message));
	  			}
	  		);		 

	 	},

		delete: function(request, reply) {

	    	Equipe.remove(request.params._id).then(
          		function(equipe) { 
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

var equipeController = new EquipeController();

module.exports = equipeController;

