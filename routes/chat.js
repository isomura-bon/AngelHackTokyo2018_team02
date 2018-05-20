const express = require('express');
const router = express.Router();
var UserInfo = require('../models/user');

router.get('/', function(request, response){

    const talker = request.query.talker;
    const listener = request.query.listener;

    response.render('chat',{
	'talker' : talker,
	'listener' : listener
    });
});

module.exports = router;
