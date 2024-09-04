const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.userModel = require('./User.Model');
db.emailModel = require('./Email.Model');

module.exports = db;
