var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo-test', { useNewUrlParser: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;