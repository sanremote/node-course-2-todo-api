var mongoose = require('mongoose');
var options = {useMongoClient: true};

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, options);

module.exports = {mongoose};
