var mongoose = require('../db/index');

var UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    login: {
        type: String,
        require: true,
    },
    senha: {
        type: String,
        require: true,
        select: false,
    }
});

var User = mongoose.model('users', UserSchema);

module.exports = User;