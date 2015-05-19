var Joi = require('joi');
var controllers = require('../controllers');
var validators = require('../validators');

exports.register = function(server, options, next) {

	/**
	* @api {get} /api/equipes
	* @apiName find
	* @apiGroup Equipe
	* @apiDescription Lista de equipes
	*
	* @apiHeader {String} Authorization Token com o JWT
	*
	*/
	server.route({
		method: 'GET',
		path: '/api/equipes',
		config: {
			handler : controllers.EquipeController.find,
			validate: validators.EquipeValidator.find,
			auth: 'token'
		}
	});

	/**
	* @api {get} /api/equipes
	* @apiName findById
	* @apiGroup Equipe
	* @apiDescription Retorna equipe com base no parâmetro
	*
	* @apiHeader {String} Authorization Token com o JWT
	*	
	*
	* @apiParam {String} id ID da equipe
	*/
	server.route({
		method: 'GET',
		path: '/api/equipes/{_id}',
		config: {
		  	handler : controllers.EquipeController.findByID,
			validate: validators.EquipeValidator.findByID,
			auth: 'token'
		}
	});

	/**
	* @api {post} /api/equipes
	* @apiName insert
	* @apiGroup Equipe
	* @apiDescription Criar equipe
	*
	* @apiHeader {String} Authorization Token com o JWT
	*
	*
	* @apiParam {String} nome Nome do equipe
	* @apiParam {Object} organizacao Organização da equipe
	* @apiParam {Object} usuario Usuário da equipe
	*/
	server.route({ 
		method: 'POST',
		path: '/api/equipes',
		config: {
			handler: controllers.EquipeController.insert,
			validate: validators.EquipeValidator.insert,
			auth: 'token'
		}
	});

	/**
	* @api {put} /api/equipes
	* @apiName update
	* @apiGroup Equipe
	* @apiDescription Atualizar equipe
	*
	* @apiHeader {String} Authorization Token com o JWT
	*
	*
	* @apiParam {String} [nome] Nome do equipe
	* @apiParam {Object} [organizacao] Organização da equipe
	* @apiParam {Object} [usuario] Usuário da equipe
	*
	* @apiParam {String} id ID da equipe a ser atualizada
	*/
	server.route({
		method: 'PUT', 
		path: '/api/equipes/{_id}',
		config: {
			handler: controllers.EquipeController.update,
			validate: validators.EquipeValidator.update,
			auth: 'token'
		} 
	}); 
	 
	/**
	* @api {delete} /api/equipes
	* @apiName delete
	* @apiGroup Equipe
	* @apiDescription Excluir equipe
	*
	* @apiHeader {String} Authorization Token com o JWT
	*
	*
	* @apiParam {String} id ID da equipe a ser excluída
	*/	 
	server.route({
		method: 'DELETE',
		path: '/api/equipes/{_id}',
		config: {
	    	handler: controllers.EquipeController.delete,
	    	validate: validators.EquipeValidator.delete,
	    	auth: 'token'
		}
	});

	next();
};

exports.register.attributes = {
  name: 'equipe-route',
  version: '0.0.1'
};
