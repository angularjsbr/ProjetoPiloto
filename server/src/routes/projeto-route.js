var Joi = require('joi');
var controllers = require('../controllers');
var validators = require('../validators');

exports.register = function(server, options, next) {

	/**
	* @api {get} /api/projetos
	* @apiName find
	* @apiGroup Projeto
	* @apiDescription Lista de projetos
	*
	* @apiHeader {String} Autorização, token com o JWT
	*
	*/
	server.route({
		method: 'GET',
		path: '/api/projetos',
		config: {
			handler : controllers.ProjetoController.find,
			validate: validators.ProjetoValidator.find,
			auth: 'token'
		}
	});

	/**
	* @api {get} /api/projetos
	* @apiName findById
	* @apiGroup Projeto
	* @apiDescription Retorna projeto com base no parâmetro
	*
	* @apiHeader {String} Autorização, token com o JWT
	*	
	*
	* @apiParam {String} id ID do projeto
	*/
	server.route({
		method: 'GET',
		path: '/api/projetos/{_id}',
		config: {
		  	handler : controllers.ProjetoController.findByID,
			validate: validators.ProjetoValidator.findByID,
			auth: 'token'
		}
	});

	/**
	* @api {post} /api/projetos
	* @apiName insert
	* @apiGroup Projeto
	* @apiDescription Criar projeto
	*
	* @apiHeader {String} Autorização, token com o JWT
	*
	*
	* @apiParam {String} nome Nome do projeto
	* @apiParam {String} [descricao] Descrição do projeto
	* @apiParam {Object} organizacao Organização do projeto
	* @apiParam {String} ativo Se projeto está ativo
	*/
	server.route({ 
		method: 'POST',
		path: '/api/projetos',
		config: {
			handler: controllers.ProjetoController.insert,
			validate: validators.ProjetoValidator.insert,
			auth: 'token'
		}
	});

	/**
	* @api {put} /api/projetos
	* @apiName update
	* @apiGroup Projeto
	* @apiDescription Atualizar projeto
	*
	* @apiHeader {String} Autorização, token com o JWT
	*
	*
	* @apiParam {String} [nome] Nome do projeto
	* @apiParam {String} [descricao] Descrição do projeto
	* @apiParam {Object} [organizacao] Organização do projeto
	* @apiParam {String} [ativo] Se o projeto está ativo
	*
	* @apiParam {String} id ID do projeto a ser atualizado
	*/
	server.route({
		method: 'PUT', 
		path: '/api/projetos/{_id}',
		config: {
			handler: controllers.ProjetoController.update,
			validate: validators.ProjetoValidator.update,
			auth: 'token'
		} 
	}); 
	 
	/**
	* @api {delete} /api/projetos
	* @apiName delete
	* @apiGroup Projeto
	* @apiDescription Excluir projeto
	*
	* @apiHeader {String} Autorização, token com o JWT
	*
	*
	* @apiParam {String} id ID do projeto a ser excluído
	*/	 
	server.route({
		method: 'DELETE',
		path: '/api/projetos/{_id}',
		config: {
	    	handler: controllers.ProjetoController.delete,
	    	validate: validators.ProjetoValidator.delete,
	    	auth: 'token'
		}
	});

	next();
};

exports.register.attributes = {
  name: 'projeto-route',
  version: '0.0.1'
};
