/**
 * Created by ftavora on 14/09/16.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/', express.static('./app'));

app.get('/checkout', function(req, res){
  res.status(500).send({error: "Internal Server error"});
});

app.get('/newcar', function(req, res){
  res.status(400).send({error: "Bad request"});
});

app.listen(process.env.EXPRESS_PORT || 80);