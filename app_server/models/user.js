var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    surname : String,
    username : {type : String , required:true , unique:true},
    password : {type : String , required:true}
});

var User = mongoose.model('Users' , userSchema);

module.exports = User;