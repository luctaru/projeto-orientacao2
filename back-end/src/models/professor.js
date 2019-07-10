var mongoose = require('../db/index');

var ProfessorSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    ra: {
        type: Number,
        require: true,
    }
});

var Professor = mongoose.model('professores', ProfessorSchema);

module.exports = Professor;