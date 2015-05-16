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
	*/
	server.route({
		method: 'GET',
		path: '/api/projetos',
		config: {
			handler : controllers.ProjetoController.find,
			validate: validators.ProjetoValidator.find
		}
	});

	/**
	* @api {get} /api/projetos
	* @apiName findById
	* @apiGroup Projeto
	* @apiDescription Retorna projeto com base no parâmetro
	*	
	*
	* @apiParam {String} id ID do projeto
	*/
	server.route({
		method: 'GET',
		path: '/api/projetos/{_id}',
		config: {
		  	handler : controllers.ProjetoController.findByID,
			validate: validators.ProjetoValidator.findByID
		}
	});

	/**
	* @api {post} /api/projetos
	* @apiName insert
	* @apiGroup Projeto
	* @apiDescription Criar projeto
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
			validate: validators.ProjetoValidator.insert
		}
	});

	/**
	* @api {put} /api/projetos
	* @apiName update
	* @apiGroup Projeto
	* @apiDescription Atualizar projeto
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
			validate: validators.ProjetoValidator.update
		} 
	}); 
	 
	/**
	* @api {delete} /api/projetos
	* @apiName delete
	* @apiGroup Projeto
	* @apiDescription Excluir projeto
	*
	*
	* @apiParam {String} id ID do projeto a ser excluído
	*/	 
	server.route({
		method: 'DELETE',
		path: '/api/projetos/{_id}',
		config: {
	    	handler: controllers.ProjetoController.delete,
	    	validate: validators.ProjetoValidator.delete
		}
	});

	next();
};

exports.register.attributes = {
  name: 'projeto-route',
  version: '0.0.1'
};
