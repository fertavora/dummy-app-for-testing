/**
 * Created by ftavora on 14/09/16.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/', express.static('./app'));
app.listen(process.env.EXPRESS_PORT || 3000);