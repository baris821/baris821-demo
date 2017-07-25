var User = require('../models/user');

module.exports.index = function(req , res){
    res.render("login");
}
module.exports.indexPost = function(req , res){

    User.find({username : req.body.username , password : req.body.password} , function(err , user){
        if(err){
            console.log(err);
            return res.status(500).send();
        }
        if(!user){
            res.status(404).send();
        }

        return res.status(200).send();
    });
}
module.exports.register = function(req , res){
    res.render("register");
}
module.exports.registerPost = function(req , res){

    console.log(req.body);

    var newUser = new User(req.body);

    newUser.save(function(err){
        if(err){
            console.log('Save : ' + err);
        }
            
    });

    res.render("register");
}
