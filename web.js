var express = require('express');
var fs = require ('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buf = fs.readFileSync("index.html");
  var hello_string = buf.toString();
  response.send(hello_string);
});
var port = process.env.PORT ||8080; 
app.listen(port, function() {
  console.log("Listening on " + port);
});
