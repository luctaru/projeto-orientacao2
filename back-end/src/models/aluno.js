var mongoose = require('../db/index');

var AlunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    ra: {
        type: String,
        require: true,
    }
});

var Aluno = mongoose.model('alunos', AlunoSchema);

module.exports = Aluno;