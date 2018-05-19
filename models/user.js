var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserInfo = new Schema({
    username : { type: String, require: true },
    userid   : { type: String, require: true },
    gcm      : { type: String },
    status   : { type: Boolean, require: true},
    disease  : { type: String },
    jobIndustry : { type: String }
});

module.exports = mongoose.model('userinfo', UserInfo);
