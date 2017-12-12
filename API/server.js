const restify = require('restify');
//const logger = require('morgan');
const corsmiddleware = require('restify-cors-middleware');
const server = restify.createServer({
    'name': 'PraktiskWeb',
    'version': '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.jsonp());
//server.use(logger('dev'));
const cors = corsmiddleware({ origins: ['*'], 'allowHeaders': ['Authorization', 'userID'] });
server.pre(cors.preflight);
server.use(cors.actual);

require('./routes/index')(server);

server.listen(1337);