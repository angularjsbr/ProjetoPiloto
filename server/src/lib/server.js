var Hapi = require('hapi');

var constants = require('../config/constants.js');
var plugins = require('../plugins');
var routes = require('../routes');
var Org = require('../models/organizacao');
var db = require('./db.js');



var server = new Hapi.Server();

server.connection({
    host: constants.application['host'],
    port: constants.application['port'],
    routes: {
        cors: true
    }
});

server.register(plugins.concat(routes), function (err) {
    if (err)
        throw err;
});

server.on('start', function () {
    db();
    if (constants.dataBase['seed']) {
        Org.find({}).remove(function () {
            Org.create({nome: 'AnguarJS BR', 'descricao': 'Comunidade Brasileira de AngularJS'}, function (err, org) {
                if (err)
                    throw err;
                console.log("Org Criada com Sucesso!");
                console.log(org);
            });
        });
    }
});

server.on('request-error', function (request, err) {
    console.log('Error response (500) sent for request: ' + request.route.path + ' because: ' + err.message);
});

module.exports = server;