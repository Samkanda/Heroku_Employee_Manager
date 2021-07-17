const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        required: true,
        type: String,
        unique: true
    },
    gender : String,
    status : String,
    avatar : { type: String, required: true }

})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;