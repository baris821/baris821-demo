var express = require('express');
var router = express.Router();
var controller = require('../controller/HomeController');

router.get('/',controller.index);

module.exports = router;