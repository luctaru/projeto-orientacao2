var jwt = require('jsonwebtoken');
var authConfig = require('../config/auth');

module.exports = (req, res, next) => {
    var authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({error: 'Token nao foi informado!'});
    }

    var parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return res.status(401).send({error: 'Token invalido!'});
    }

    var [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).send({error: 'Token invalido!'});
    }

    jwt.verify(token, authConfig.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({error: 'Token invalido!'});
        }

        req.userId = decoded.id;
        return next();
    });
};