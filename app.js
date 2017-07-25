///
var express = require('express');
var path = require('path');
// layout nesnesi oluşturuldu.
var layout = require('express-ejs-layouts');
// express module nesnesi oluşturuldu.
var app = express();
var bodyParser = require('body-parser');

// Veritabanı bağlantısı 
var db = require('./app_server/models/db');

// ejs motoru projeye eklendi.
app.set('view engine' , 'ejs');
app.set('views',path.join(__dirname ,'/app_server/views'));

//Gelen verilerin parse işlemi için module tanımlandı.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// layout projeye tanımlandı.
app.use(layout);

// public klasörü kullanıcıya açıldı.
app.use('/public' , express.static(path.join(__dirname , 'public')));

 /** Yönlendirme işlemi için nesne oluşturuldu.
  ** Parametre olarak app nesnesi gönderildi.
  */
require('./app_server/routers/RouteManager')(app);


///app.listen(8000);
app.listen(process.env.PORT || 8080, function(){
  console.log('listening  port 8080');
});
