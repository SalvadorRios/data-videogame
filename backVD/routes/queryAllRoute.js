const express = require('express');
const varQuery  = require('../querys/queryAll');
//Middleware

var router = express.Router();

router.get('/queryAll', varQuery.queryFun);

module.exports = router;