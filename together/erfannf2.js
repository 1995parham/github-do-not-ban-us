var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send('Github for Everyone! No to racism.');
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);
