var mongoose = require('mongoose');
var options = {useMongoClient: true};

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', options);

module.exports = {mongoose};
