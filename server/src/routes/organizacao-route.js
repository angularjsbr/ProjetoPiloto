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
	* @apiHeader {String} Authorization Token com o JWT
	*
	*/
	server.route({
		method: 'GET',
		path: '/api/organizacoes',
		config: {
			handler : controllers.OrganizacaoController.find,
			validate: validators.OrganizacaoValidator.find,
			auth: 'token'
		}
	});

	/**
	* @api {get} /api/organizacoes
	* @apiName findById
	* @apiGroup Organizacao
	* @apiDescription Retorna organização com base no parâmetro
	*
	* @apiHeader {String} Authorization Token com o JWT
	*	
	*
	* @apiParam {String} id ID do organização
	*/
	server.route({
		method: 'GET',
		path: '/api/organizacoes/{_id}',
		config: {
		  	handler : controllers.OrganizacaoController.findByID,
			validate: validators.OrganizacaoValidator.findByID,
			auth: 'token'
		}
	});

	/**
	* @api {post} /api/organizacoes
	* @apiName insert
	* @apiGroup Organizacao
	* @apiDescription Criar organização
	*
	* @apiHeader {String} Authorization Token com o JWT
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
			validate: validators.OrganizacaoValidator.insert,
			auth: 'token'
		}
	});

	/**
	* @api {put} /api/organizacoes
	* @apiName update
	* @apiGroup Organizacao
	* @apiDescription Atualizar organização
	*
	* @apiHeader {String} Authorization Token com o JWT
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
			validate: validators.OrganizacaoValidator.update,
			auth: 'token'
		} 
	}); 
	 
	/**
	* @api {delete} /api/organizacoes
	* @apiName delete
	* @apiGroup Organizacao
	* @apiDescription Excluir organização
	*
	* @apiHeader {String} Authorization Token com o JWT
	*
	*
	* @apiParam {String} id ID da organização a ser excluída
	*/	 
	server.route({
		method: 'DELETE',
		path: '/api/organizacoes/{_id}',
		config: {
	    	handler: controllers.OrganizacaoController.delete,
	    	validate: validators.OrganizacaoValidator.delete,
	    	auth: 'token'
		}
	});

	next();
};

exports.register.attributes = {
  name: 'organizacao-route',
  version: '0.0.1'
};
