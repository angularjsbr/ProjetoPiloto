var Joi = require('joi');
var controllers = require('../controllers');
var validators = require('../validators');

exports.register = function(server, options, next) {

	/**
	* @api {get} /api/organizacoes
	* @apiName find
	* @apiGroup Organizacao
	* @apiDescription Lista de organizações
	*
	*/
	server.route({
		method: 'GET',
		path: '/api/organizacoes',
		config: {
			handler : controllers.OrganizacaoController.find,
			validate: validators.OrganizacaoValidator.find
		}
	});

	/**
	* @api {get} /api/organizacoes
	* @apiName findById
	* @apiGroup Organizacao
	* @apiDescription Retorna organização com base no parâmetro
	*	
	*
	* @apiParam {String} id ID do organização
	*/
	server.route({
		method: 'GET',
		path: '/api/organizacoes/{_id}',
		config: {
		  	handler : controllers.OrganizacaoController.findByID,
			validate: validators.OrganizacaoValidator.findByID
		}
	});

	/**
	* @api {post} /api/organizacoes
	* @apiName insert
	* @apiGroup Organizacao
	* @apiDescription Criar organização
	*
	*
	* @apiParam {String} nome Nome da organização
	* @apiParam {String} [descricao] Descrição da organização
	* @apiParam {String} [logo] Logo da organização
	* @apiParam {String} ativo Se organização está ativa
	*/
	server.route({ 
		method: 'POST',
		path: '/api/organizacoes',
		config: {
			handler: controllers.OrganizacaoController.insert,
			validate: validators.OrganizacaoValidator.insert
		}
	});

	/**
	* @api {put} /api/organizacoes
	* @apiName update
	* @apiGroup Organizacao
	* @apiDescription Atualizar organização
	*
	*
	* @apiParam {String} [nome] Nome da organização
	* @apiParam {String} [descricao] Descrição da organização
	* @apiParam {String} [logo] Logo da organização
	* @apiParam {String} [ativo] Se organização está ativa
	*
	* @apiParam {String} id ID da organização a ser atualizado
	*/
	server.route({
		method: 'PUT', 
		path: '/api/organizacoes/{_id}',
		config: {
			handler: controllers.OrganizacaoController.update,
			validate: validators.OrganizacaoValidator.update
		} 
	}); 
	 
	/**
	* @api {delete} /api/organizacoes
	* @apiName delete
	* @apiGroup Organizacao
	* @apiDescription Excluir organização
	*
	*
	* @apiParam {String} id ID da organização a ser excluída
	*/	 
	server.route({
		method: 'DELETE',
		path: '/api/organizacoes/{_id}',
		config: {
	    	handler: controllers.OrganizacaoController.delete,
	    	validate: validators.OrganizacaoValidator.delete
		}
	});

	next();
};

exports.register.attributes = {
  name: 'organizacao-route',
  version: '0.0.1'
};
