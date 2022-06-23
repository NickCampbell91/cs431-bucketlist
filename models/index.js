const dbConfig = require('../config/db.config');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.bucket = require('./bucket')(mongoose);
db.user = require('./user')(mongoose);

module.exports = db;