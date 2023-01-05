const express = require('express');
const varQuery  = require('../querys/next');
//Middleware

var router = express.Router();

router.get('/Next', varQuery.queryGamesNext);

module.exports = router;