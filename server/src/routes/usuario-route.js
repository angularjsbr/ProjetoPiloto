var Joi = require('joi');
var controllers = require('../controllers');
var validators = require('../validators');

exports.register = function(server, options, next) {

	/**
	* @api {get} /api/users
	* @apiName find
	* @apiGroup User
	* @apiDescription Returns a list of users
	*
	*/
	server.route({
		method: 'GET',
		path: '/api/users',
		config: {
			handler : controllers.UsuarioController.find,
			validate: validators.UsuarioValidator.find
		}
	});

	/**
	* @api {get} /api/users
	* @apiName findById
	* @apiGroup User
	* @apiDescription Returns a user based on the parameter
	*
	*
	* @apiParam {String} id The user id to be returned
	*/
	server.route({
		method: 'GET',
		path: '/api/users/{id}',
		config: {
		  	handler : controllers.UsuarioController.findByID,
			validate: validators.UsuarioValidator.findByID
		}
	});

	/**
	* @api {post} /api/v1/user
	* @apiName insert
	* @apiGroup User
	* @apiDescription Create new user
	*
	*
	* @apiParam {String} name User's first name
	* @apiParam {String} lastName Last name of the user
	* @apiParam {String} email The user email
	* @apiParam {String} password The user password
	*/
	server.route({ 
		method: 'POST',
		path: '/api/users',
		config: {
			handler: controllers.UsuarioController.insert,
			validate: validators.UsuarioValidator.insert
		}
	});

	/**
	* @api {put} /api/v1/user
	* @apiName update
	* @apiGroup User
	* @apiDescription Update user
	*
	*
	* @apiParam {String} [name] User's first name
	* @apiParam {String} [lastName] Last name of the user
	* @apiParam {String} [email] The user email
	* @apiParam {String} [password] The user password
	*
	* @apiParam {String} id The user id to be updated
	*/
	server.route({
		method: 'PUT', 
		path: '/api/users/{id}',
		config: {
			handler: controllers.UsuarioController.update,
			validate: validators.UsuarioValidator.update
		} 
	}); 
	 
	/**
	* @api {delete} /api/v1/user
	* @apiName delete
	* @apiGroup User
	* @apiDescription Delete user
	*
	*
	* @apiParam {String} id The user id to be deleted
	*/	 
	server.route({
		method: 'DELETE',
		path: '/api/users/{id}',
		config: {
	    	handler: controllers.UsuarioController.delete,
	    	validate: validators.UsuarioValidator.delete
		}
	});

	next();
};

exports.register.attributes = {
  name: 'usuario-route',
  version: '0.0.1'
};
