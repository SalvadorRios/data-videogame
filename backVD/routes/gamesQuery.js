const express = require('express');
const varQuery  = require('../querys/gamesQuery');
//Middleware

var router = express.Router();

router.get('/queryGames', varQuery.queryGames);

module.exports = router;