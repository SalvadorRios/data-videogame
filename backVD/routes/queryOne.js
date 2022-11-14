const express = require('express');
const varQuery  = require('../querys/queryOne');
//Middleware

var router = express.Router();

router.get('/queryOne', varQuery.queryFun);

module.exports = router;