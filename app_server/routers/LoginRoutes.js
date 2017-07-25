var express = require('express');
var router = express.Router();
var controller = require('../controller/LoginController');

router.get('/login',controller.index);
router.post('/login',controller.indexPost);
router.get('/register' , controller.register);
router.post('/register' , controller.registerPost);

module.exports = router;