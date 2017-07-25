var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

///var mongoDB = 'mongodb://localhost/NodeJS';
var mongoDB = 'mongodb://baris821:comlek66@ds111123.mlab.com:11123/deneme';

mongoose.connect(mongoDB , function(err){
    if(err)
        console.log('Hata : ' + err);
    else
        console.log('basarili : ' + mongoDB);
});