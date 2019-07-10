var express = require('express');
var authMiddleware = require('../middleware/auth');
//var Aluno = require('../models/aluno');
var Professor = require('../models/professor');
// var Orientacao = require('../models/orientacao');
// var User = require('../models/user');

var router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        var professor = await Professor.find();
        res.send({professor});
    } catch (error) {
        res.send({error: error});
    }
});

router.get('/:id', async (req, res) => {
    try {
        var professor = await Professor.findOne({"_id": req.params.id});
        res.send({professor});
    } catch (error) {
        res.send({error: error});
    }
});

router.post('/', async (req, res) => {
    try{
        var professor = await Professor.create(req.body);

        return res.send({ professor });
    } catch {
        return res.status(400).send({error: 'Falha no Cadastro !'});
    }
});

router.put('/:ra', async (req, res) => {
    try{
        console.log(req.params.ra);
        console.log(req.body);
        var professor = await Professor.updateOne({ra: req.params.ra}, {$set: {"nome": req.body.nome, "ra": req.body.ra}});

        return res.send({ professor });
    } catch {
        return res.status(400).send({error: 'Falha no Cadastro !'});
    }
});

router.delete('/', async (req, res) => {
    try{
        var professor = await Professor.deleteOne(req.body);

        return res.status(200);
    } catch {
        return res.status(400).send({error: 'Falha no Cadastro !'});
    }
});

module.exports = app => app.use('/professores', router);