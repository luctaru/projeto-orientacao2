var express = require('express');
var authMiddleware = require('../middleware/auth');
//var Aluno = require('../models/aluno');
//var Professor = require('../models/professor');
var Orientacao = require('../models/orientacao');
// var User = require('../models/user');

var router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
    try {
        var orientacao = await Orientacao.find();
        res.send({orientacao});
    } catch (error) {
        res.send({error: error});
    }
});

router.get('/:id', async (req, res) => {
    try {
        var orientacao = await Orientacao.findOne({"_id": req.params.id});
        res.send({orientacao});
    } catch (error) {
        res.send({error: error});
    }
});

router.post('/', async (req, res) => {
    try{
        var orientacao = await Orientacao.create(req.body);

        return res.send({ orientacao });
    } catch {
        return res.status(400).send({error: 'Falha no Cadastro !'});
    }
});

router.put('/:id', async (req, res) => {
    try{
        console.log(req.body);
        var orientacao = await Orientacao.update({_id: req.params.ra}, {$set: {"nome": req.body.nome, "prof": req.body.prof, "alu":req.body.alu}});

        return res.send({ orientacao });
    } catch {
        return res.status(400).send({error: 'Falha no Cadastro !'});
    }
});

router.delete('/:id', async (req, res) => {
    try{
        var orientacao = await Orientacao.deleteOne({"_id": req.params.id});

        return res.status(200);
    } catch {
        return res.status(400).send({error: 'Falha no Cadastro !'});
    }
});

router.get('/professor/:id', async (req, res) => {
    try{
        console.log(req.params.id);
        var orientacao = await Orientacao.find({"prof._id": req.params.id});

        return res.send({ orientacao });
    } catch {
        return res.status(400).send({error: 'Falha no Cadastro !'});
    }
});

module.exports = app => app.use('/orientacoes', router);