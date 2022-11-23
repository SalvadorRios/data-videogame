const express = require('express');
const cors = require('cors');
const app = express();
const startupdebug = require('debug')('app:startup');

var query = require('./routes/queryRoute');
var queryAll = require('./routes/queryAllRoute');
var queryOne = require('./routes/queryOne');
var queryGames = require('./routes/gamesQuery');

app.use(express.json())
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT"); //,DELETE,OPTIONS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});


app.use('/api', query);
app.use('/api', queryAll);
app.use('/api', queryOne);
app.use('/api', queryGames);

app.get('/', (req, res) => {res.send('Hello World!')})

var port = process.env.PORT || 8000;
app.listen(port, () => {
    startupdebug('Listening @', port);
});
