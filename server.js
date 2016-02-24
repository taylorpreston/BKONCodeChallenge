var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'))

app.listen(3000, function(){
  console.log('frontend server running on port 3000')
})
