var Joi = require('joi');
var controllers = require('../controllers');
var validators = require('../validators');

exports.register = function(server, options, next) {

	/**
	* @api {get} /api/users
	* @apiName find
	* @apiGroup Usuario
	* @apiDescription Lista de usuários
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
	* @apiGroup Usuario
	* @apiDescription Retorna usuário com base no parâmetro
	*
	*
	* @apiParam {String} id ID do usuário
	*/
	server.route({
		method: 'GET',
		path: '/api/users/{_id}',
		config: {
		  	handler : controllers.UsuarioController.findByID,
			validate: validators.UsuarioValidator.findByID
		}
	});

	/**
	* @api {post} /api/v1/user
	* @apiName insert
	* @apiGroup Usuario
	* @apiDescription Criar usuário
	*
	*
	* @apiParam {String} nome Nome do usuário
	* @apiParam {Object} organizacao Organização do usuário
	* @apiParam {String} email E-mail do usuário
	* @apiParam {String} senha Senha do usuário
	* @apiParam {Boolean} ativo Se o usuário está ativo
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
	* @apiGroup Usuario
	* @apiDescription Atualizar usuário
	*
	*
	* @apiParam {String} [nome] Nome do usuário
	* @apiParam {Object} [organizacao] Organização do usuário
	* @apiParam {String} [email] E-mail do usuário
	* @apiParam {String} [senha] Senha do usuário
	* @apiParam {Boolean} [ativo] Se o usuário está ativo
	*
	* @apiParam {String} id ID do usuário a ser atualizado
	*/
	server.route({
		method: 'PUT', 
		path: '/api/users/{_id}',
		config: {
			handler: controllers.UsuarioController.update,
			validate: validators.UsuarioValidator.update
		} 
	}); 
	 
	/**
	* @api {delete} /api/v1/user
	* @apiName delete
	* @apiGroup Usuario
	* @apiDescription Excluir usuário
	*
	*
	* @apiParam {String} id ID do usuário a ser excluído
	*/	 
	server.route({
		method: 'DELETE',
		path: '/api/users/{_id}',
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
