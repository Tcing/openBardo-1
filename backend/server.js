'use strict';

var express = require('express'),
  app = express();

app.set('views', './frontend/views');

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index');
})

app.listen(3000);

console.log('welcome to our application');
