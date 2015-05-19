var controllers = require('../controllers');
var validators = require('../validators');

exports.register = function(server, options, next) {

  /**
   * @api {post} /api/v1/auth
   * @apiName  Auth
   * @apiGroup Auth
   * @apiDescription Cria um novo JWT a partir de um usuário e uma senha
   *
   * @apiParam {String} email E-mail do usuário
   * @apiParam {String} senha Senha do usuário
   */
  server.route({
    method: 'POST',
    path: '/api/auth',
    config: {
      handler:  controllers.AuthController.auth,
      validate: validators.AuthValidator.auth
    }
  });

  /**
   * @api {get} /api/v1/auth
   * @apiName  Get
   * @apiGroup Auth
   * @apiDescription Retorna informações sobre o token atual
   *
   * @apiHeader {String} Autorização, token com o JWT
   */
  server.route({
    method: 'GET',
    path: '/api/auth',
    config: {
      handler : controllers.AuthController.getAuth,
      auth: 'token'
    }
  });

  next();
};

exports.register.attributes = {
  name: 'auth-route',
  version: '0.0.1'
};
