const express = require('express');
const varQuery  = require('../querys/query');
//Middleware

var router = express.Router();

router.get('/query', varQuery.queryFun);

module.exports = router;