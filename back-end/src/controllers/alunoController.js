var express = require('express');
var authMiddleware = require('../middleware/auth');
var Aluno = require('../models/aluno');
// var Professor = require('../models/professor');
// var Orientacao = require('../models/orientacao');
// var User = require('../models/user');

var router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        var aluno = await Aluno.find();
        res.send({aluno});
    } catch (error) {
        res.send({error: error});
    }
});

router.get('/:id', async (req, res) => {
    try {
        var aluno = await Aluno.findOne({"_id": req.params.id});
        res.send({aluno});
    } catch (error) {
        res.send({error: error});
    }
});

router.post('/', async (req, res) => {
    try{
        var aluno = await Aluno.create(req.body);

        return res.send({ aluno });
    } catch {
        return res.status(400).send({error: 'Falha no Cadastro !'});
    }
});

router.put('/:ra', async (req, res) => {
    try{
        var aluno = await Aluno.update({ra: req.params.ra}, {$set: {"nome": req.body.nome, "ra": req.body.ra}});

        return res.send({ aluno });
    } catch {
        return res.status(400).send({error: 'Falha no Cadastro !'});
    }
});

router.delete('/', async (req, res) => {
    try{
        var aluno = await Aluno.deleteOne(req.body);

        return res.status(200);
    } catch {
        return res.status(400).send({error: 'Falha no Cadastro !'});
    }
});

module.exports = app => app.use('/alunos', router);