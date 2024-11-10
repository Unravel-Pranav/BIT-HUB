const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    full_name: { type: String, default: null },
    email: { type: String, unique: true },
    role : {type : String, default : "cr"},
    branch : {type : String, default : "computer"},
    sem : {type : String, default : "1-Sem"},
    password: { type: String },
    verified :{type:Boolean , default:false},
    token: { type: String },
    resetToken: String,
    resetTokenExpiration: Date,
})

module.exports = mongoose.model("bituser", UserSchema)