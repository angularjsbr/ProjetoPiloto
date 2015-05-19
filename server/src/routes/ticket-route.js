var Joi = require('joi');
var controllers = require('../controllers');
var validators = require('../validators');

exports.register = function(server, options, next) {

	/**
	* @api {get} /api/tickets
	* @apiName find
	* @apiGroup Ticket
	* @apiDescription Lista de tickets
	*
	* @apiHeader {String} Autorização, token com o JWT
	*
	*/
	server.route({
		method: 'GET',
		path: '/api/tickets',
		config: {
			handler : controllers.TicketController.find,
			validate: validators.TicketValidator.find,
			auth: 'token'
		}
	});

	/**
	* @api {get} /api/tickets
	* @apiName findById
	* @apiGroup Ticket
	* @apiDescription Retorna ticket com base no parâmetro
	*
	* @apiHeader {String} Autorização, token com o JWT
	*	
	*
	* @apiParam {String} id ID do ticket
	*/
	server.route({
		method: 'GET',
		path: '/api/tickets/{_id}',
		config: {
		  	handler : controllers.TicketController.findByID,
			validate: validators.TicketValidator.findByID,
			auth: 'token'
		}
	});

	/**
	* @api {post} /api/tickets
	* @apiName insert
	* @apiGroup Ticket
	* @apiDescription Criar ticket
	*
	* @apiHeader {String} Autorização, token com o JWT
	*
	*
	* @apiParam {String} titulo Título do ticket
	* @apiParam {String} [descricao] Descrição do ticket
	* @apiParam {String} [tipo] Tipo do ticket
	* @apiParam {String} [prioridade] Prioridade do ticket
	* @apiParam {Number} sprint Sprint do ticket
	* @apiParam {Date} data_inicio Data ínicio do ticket
	* @apiParam {Date} [data_prevista] Data pravista do ticket
	* @apiParam {Number} status Status do ticket
	* @apiParam {Date} [data_criacao] Data de criação do ticket
	* @apiParam {Object} criador Criado do ticket
	* @apiParam {Object} atribuido Atribuído ao ticket
	* @apiParam {Boolean} [ativo] Se ticket está ativo
	*/
	server.route({ 
		method: 'POST',
		path: '/api/tickets',
		config: {
			handler: controllers.TicketController.insert,
			validate: validators.TicketValidator.insert,
			auth: 'token'
		}
	});

	/**
	* @api {put} /api/tickets
	* @apiName update
	* @apiGroup Ticket
	* @apiDescription Atualizar ticket
	*
	* @apiHeader {String} Autorização, token com o JWT
	*
	*
	* @apiParam {String} [titulo] Título do ticket
	* @apiParam {String} [descricao] Descrição do ticket
	* @apiParam {String} [tipo] Tipo do ticket
	* @apiParam {String} [prioridade] Prioridade do ticket
	* @apiParam {Number} [sprint] Sprint do ticket
	* @apiParam {Date} [data_inicio] Data ínicio do ticket
	* @apiParam {Date} [data_prevista] Data pravista do ticket
	* @apiParam {Number} [status] Status do ticket
	* @apiParam {Date} [data_criacao] Data de criação do ticket
	* @apiParam {Object} [criador] Criado do ticket
	* @apiParam {Object} [atribuido] Atribuído ao ticket
	* @apiParam {Boolean} [ativo] Se ticket está ativo
	*
	* @apiParam {String} id ID do ticket a ser atualizado
	*/
	server.route({
		method: 'PUT', 
		path: '/api/tickets/{_id}',
		config: {
			handler: controllers.TicketController.update,
			validate: validators.TicketValidator.update,
			auth: 'token'
		} 
	}); 
	 
	/**
	* @api {delete} /api/tickets
	* @apiName delete
	* @apiGroup Ticket
	* @apiDescription Excluir ticket
	*
	* @apiHeader {String} Autorização, token com o JWT
	*
	*
	* @apiParam {String} id ID do ticket a ser excluído
	*/	 
	server.route({
		method: 'DELETE',
		path: '/api/tickets/{_id}',
		config: {
	    	handler: controllers.TicketController.delete,
	    	validate: validators.TicketValidator.delete,
	    	auth: 'token'
		}
	});

	next();
};

exports.register.attributes = {
  name: 'ticket-route',
  version: '0.0.1'
};
