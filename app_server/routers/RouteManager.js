var loginRoute = require('./LoginRoutes');
var homeRoute = require('./HomeRoutes');

module.exports = function(app){
    app.use('/' , loginRoute);
    app.use('/',homeRoute);
}
