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
	* @apiHeader {String} Autorização, token com o JWT
	*
	*/
	server.route({
		method: 'GET',
		path: '/api/usuarios',
		config: {
			handler : controllers.UsuarioController.find,
			validate: validators.UsuarioValidator.find,
			auth: 'token'
		}
	});

	/**
	* @api {get} /api/users
	* @apiName findById
	* @apiGroup Usuario
	* @apiDescription Retorna usuário com base no parâmetro
	*
	* @apiHeader {String} Autorização, token com o JWT
	*
	*
	* @apiParam {String} id ID do usuário
	*/
	server.route({
		method: 'GET',
		path: '/api/usuarios/{_id}',
		config: {
		  	handler : controllers.UsuarioController.findByID,
			validate: validators.UsuarioValidator.findByID,
			auth: 'token'
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
		path: '/api/usuarios',
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
	* @apiHeader {String} Autorização, token com o JWT
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
		path: '/api/usuarios/{_id}',
		config: {
			handler: controllers.UsuarioController.update,
			validate: validators.UsuarioValidator.update,
			auth: 'token'
		} 
	}); 
	 
	/**
	* @api {delete} /api/v1/user
	* @apiName delete
	* @apiGroup Usuario
	* @apiDescription Excluir usuário
	*
	* @apiHeader {String} Autorização, token com o JWT
	*
	*
	* @apiParam {String} id ID do usuário a ser excluído
	*/	 
	server.route({
		method: 'DELETE',
		path: '/api/usuarios/{_id}',
		config: {
	    	handler: controllers.UsuarioController.delete,
	    	validate: validators.UsuarioValidator.delete,
	    	auth: 'token'
		}
	});

	next();
};

exports.register.attributes = {
  name: 'usuario-route',
  version: '0.0.1'
};
