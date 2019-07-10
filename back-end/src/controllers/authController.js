var express = require('express');

var User = require('../models/user');

var jwt = require('jsonwebtoken');

var authConfig = require('../config/auth');

var router = express.Router();

router.post('/cadastro', async (req, res) => {
    try{
        var user = await User.create(req.body);

        return res.send({ user });
    } catch {
        return res.status(400).send({error: 'Falha no Cadastro !'});
    }
});

router.post('/autenticar', async (req, res) => {
    var { login, senha } = req.body;
    
    var user = await User.findOne({ login }).select('+senha');

    if (!user) {
        return res.status(400).send({ error: 'Usuario nao encontrado!'});
    }

    if (!await senha === user.senha) {
        return res.status(400).send({ error: 'Senha errada!'});
    }

    const token = jwt.sign({ id: user._id }, authConfig.secret, {
        expiresIn: 86400,
    });

    res.send({ user, token });
});

module.exports = app => app.use('/auth', router);