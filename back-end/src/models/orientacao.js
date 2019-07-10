var mongoose = require('../db/index');
var Professor = require('./professor');
var Aluno = require('./aluno');

var OrientacaoSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    prof: {
        type: {
            _id: {
                type: String,
                require: false
            },
            nome: {
                type: String,
                require: true,
            },
            ra: {
                type: String,
                require: true,
            }
        },
        require: true,
    },
    alu: {
        type: {
            nome: {
                type: String,
                require: true,
            },
            ra: {
                type: String,
                require: true,
            }
        },
        require: true,
    }
});

var Orientacao = mongoose.model('orientacoes', OrientacaoSchema);

module.exports = Orientacao;